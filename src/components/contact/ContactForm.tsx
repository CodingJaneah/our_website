import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { trackContactSubmission } from "@/lib/meta-pixel";
// import emailjs from "@emailjs/browser";

/**
 * ContactForm component - Contact form with email functionality
 */
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /**
   * Handles form submission and sends email via API endpoint
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send request to API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      // Check if response has content before parsing
      const contentType = response.headers.get("content-type");
      let data;

      // Get response text first (can only be read once)
      const text = await response.text();
      
      // Check if response is empty
      if (!text || text.trim() === "") {
        throw new Error("Empty response from server. Please check if the API server is running.");
      }

      // Only parse JSON if content-type indicates JSON
      if (contentType && contentType.includes("application/json")) {
        try {
          data = JSON.parse(text);
        } catch (parseError) {
          console.error("Failed to parse JSON response:", text);
          throw new Error("Invalid response from server. Please try again later.");
        }
      } else {
        // Non-JSON response (e.g., HTML error page)
        throw new Error(`Server error (${response.status}): ${text || "Unknown error"}`);
      }

      // Check if request was successful
      if (!response.ok) {
        throw new Error(data?.error || `Server error: ${response.status} ${response.statusText}`);
      }

      // Show success message
      if (data?.success) {
        // Track submission with Meta Pixel (non-PII metadata only)
        try {
          trackContactSubmission({ name: formData.name, email: formData.email, message: formData.message, subject: formData.subject });
        } catch (err) {
          // tracking errors should not block the success flow
          // eslint-disable-next-line no-console
          console.warn("Meta Pixel tracking error:", err);
        }
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data?.error || "Failed to send message");
      }
    } catch (error) {
      // Handle network errors or API errors
      console.error("Error sending email:", error);
      
      let errorMessage: string;
      
      if (error instanceof TypeError && error.message.includes("fetch")) {
        // Network error (API server not running or CORS issue)
        errorMessage = "Cannot connect to server. Please make sure the API server is running on port 3001.";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Failed to send message. Please try again or contact us directly.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles input changes
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      className="lg:col-span-2"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll respond within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                rows={6}
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;

