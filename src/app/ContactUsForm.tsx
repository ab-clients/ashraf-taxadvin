'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, FormEvent, useState } from 'react';

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    reason: '',
    message: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendContactUsMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: '',
          reason: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={sendContactUsMessage}>
      <div className='mt-4 flex flex-col gap-4 text-emerald-300'>
        <Input
          type='text'
          name='name'
          placeholder='Your name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type='email'
          name='email'
          placeholder='Your email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type='tel'
          name='phone'
          placeholder='Phone number'
          value={formData.phone}
          onChange={handleInputChange}
        />

        <Select
          required
          name='contactMethod'
          value={formData.contactMethod}
          onValueChange={(value) =>
            setFormData({ ...formData, contactMethod: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder='Preferred Contact Method' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='email'>Email</SelectItem>
            <SelectItem value='phone'>Phone</SelectItem>
            <SelectItem value='text Message'>Text Message</SelectItem>
          </SelectContent>
        </Select>

        <Select
          required
          name='reason'
          value={formData.reason}
          onValueChange={(value) => setFormData({ ...formData, reason: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder='Reason' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='general inquiry'>General Inquiry</SelectItem>
            <SelectItem value='Request a Call'>Request a Call</SelectItem>
            <SelectItem value='Schedule an Appointment'>
              Schedule an Appointment
            </SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          name='message'
          placeholder='Type your message here.'
          rows={8}
          value={formData.message}
          onChange={handleInputChange}
        />

        <Button
          className='self-end bg-emerald-300'
          variant='secondary'
          type='submit'
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};
