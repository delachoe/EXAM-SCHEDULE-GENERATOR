import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Exam } from '../types';

interface ExamFormProps {
  onAddExam: (exam: Exam) => void;
}

export default function ExamForm({ onAddExam }: ExamFormProps) {
  const [exam, setExam] = useState<Exam>({
    id: '',
    subject: '',
    date: '',
    startTime: '',
    endTime: '',
    roomId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExam({ ...exam, id: Date.now().toString() });
    setExam({ id: '', subject: '', date: '', startTime: '', endTime: '', roomId: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" value={exam.subject} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" value={exam.date} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="startTime">Start Time</Label>
        <Input id="startTime" name="startTime" type="time" value={exam.startTime} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="endTime">End Time</Label>
        <Input id="endTime" name="endTime" type="time" value={exam.endTime} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="room">Room</Label>
        <Input id="room" name="room" value={exam.roomId} onChange={handleChange} required />
      </div>
      <Button type="submit">Add Exam</Button>
    </form>
  );
}

