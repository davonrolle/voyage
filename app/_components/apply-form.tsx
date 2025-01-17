"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  ownerName: z.string().min(2, {
    message: "Owner name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  petName: z.string().min(1, {
    message: "Pet name is required.",
  }),
  petType: z.string().min(1, {
    message: "Pet type is required.",
  }),
  breed: z.string().min(1, {
    message: "Breed is required.",
  }),
  age: z.number().int().positive({
    message: "Age must be a positive number.",
  }),
  travelDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid date.",
  }),
});

export function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      email: "",
      petName: "",
      petType: "",
      breed: "",
      age: undefined,
      travelDate: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    console.log("Form data:", values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsDialogOpen(true);
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="petName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Name</FormLabel>
                <FormControl>
                  <Input placeholder="Fluffy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="petType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a pet type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="breed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Breed</FormLabel>
                <FormControl>
                  <Input placeholder="Labrador Retriever" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="3"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormDescription>Age in years</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="travelDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Submitted Successfully</DialogTitle>
            <DialogDescription>
              <p>
                Thank you for submitting your pet permit application. We will
                contact you via email or WhatsApp as soon as possible with
                further instructions.
              </p>
              <p className="mt-4">
                If you need to reach out to us, please contact us at:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Email: support@voyagebahamas.com</li>
                <li>Phone: +1 (242) 123-4567</li>
                <li>WhatsApp: +1 (242) 987-6543</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
