'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useEffect, useState} from 'react';
import {getCompanyInfo} from '@/services/company-info';

export function ContactForm() {
  const [companyInfo, setCompanyInfo] = useState({
    address: '',
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    const loadCompanyInfo = async () => {
      const info = await getCompanyInfo();
      setCompanyInfo(info);
    };

    loadCompanyInfo();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-xl bg-secondary">
      <h3 className="text-2xl font-bold mb-6 text-accent">
        Contact Information
      </h3>
      <div className="mb-4">
        <p className="text-muted-foreground">Address: {companyInfo.address}</p>
        <p className="text-muted-foreground">
          Phone: {companyInfo.phoneNumber}
        </p>
        <p className="text-muted-foreground">Email: {companyInfo.email}</p>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-accent">Send us a message</h3>
      <form className="grid gap-4">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" rows={4} />
        <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
          Send Message
        </Button>
      </form>
    </div>
  );
}
