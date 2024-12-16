import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Exam } from '../types';

interface ExamScheduleProps {
  exams: Exam[];
}

export default function ExamSchedule({ exams }: ExamScheduleProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Exam Schedule</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell>{exam.subject}</TableCell>
              <TableCell>{exam.date}</TableCell>
              <TableCell>{exam.startTime}</TableCell>
              <TableCell>{exam.endTime}</TableCell>
              <TableCell>{exam.roomId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

