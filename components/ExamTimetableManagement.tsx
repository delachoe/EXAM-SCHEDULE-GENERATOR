import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Exam, Room } from '../types'

interface ExamTimetableManagementProps {
  rooms: Room[];
  onAddExam: (exam: Exam) => void;
}

export function ExamTimetableManagement({ rooms, onAddExam }: ExamTimetableManagementProps) {
  const [exams, setExams] = useState<Exam[]>([]);
  const [newExam, setNewExam] = useState<Exam>({
    id: '',
    subject: '',
    date: '',
    startTime: '',
    endTime: '',
    roomId: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExam({ ...newExam, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setNewExam({ ...newExam, roomId: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const exam = { ...newExam, id: Date.now().toString() };
    setExams([...exams, exam]);
    onAddExam(exam);
    setNewExam({
      id: '',
      subject: '',
      date: '',
      startTime: '',
      endTime: '',
      roomId: '',
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Exam Timetable Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-green-50 dark:bg-green-900 p-4 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="subject" className="text-green-700 dark:text-green-300">Subject</Label>
            <Input id="subject" name="subject" value={newExam.subject} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="date" className="text-green-700 dark:text-green-300">Date</Label>
            <Input id="date" name="date" type="date" value={newExam.date} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="startTime" className="text-green-700 dark:text-green-300">Start Time</Label>
            <Input id="startTime" name="startTime" type="time" value={newExam.startTime} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="endTime" className="text-green-700 dark:text-green-300">End Time</Label>
            <Input id="endTime" name="endTime" type="time" value={newExam.endTime} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="room" className="text-green-700 dark:text-green-300">Room</Label>
            <Select onValueChange={handleSelectChange} value={newExam.roomId}>
              <SelectTrigger className="border-green-300 dark:border-green-700">
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((room) => (
                  <SelectItem key={room.id} value={room.id}>
                    {room.number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Add Exam</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100 dark:bg-green-800">
            <TableHead className="text-green-800 dark:text-green-200">Subject</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Date</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Start Time</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">End Time</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id} className="hover:bg-green-50 dark:hover:bg-green-900">
              <TableCell>{exam.subject}</TableCell>
              <TableCell>{exam.date}</TableCell>
              <TableCell>{exam.startTime}</TableCell>
              <TableCell>{exam.endTime}</TableCell>
              <TableCell>{rooms.find(room => room.id === exam.roomId)?.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

