
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export function ContactForm() {
  return (
    <form className="max-w-lg mx-auto grid gap-4">
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <Textarea placeholder="Your Message" rows={4} />
      <Button>Send Message</Button>
    </form>
  );
}
