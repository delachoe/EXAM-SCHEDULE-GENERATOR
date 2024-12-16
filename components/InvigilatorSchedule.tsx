import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Exam, Invigilator, InvigilatorScheduleGenarator } from '../types';

interface InvigilatorScheduleProps {
  invigilators: Invigilator[];
  exams: Exam[];
  schedules: InvigilatorScheduleGenarator[];
}

export default function InvigilatorSchedule({ invigilators, exams, schedules }: InvigilatorScheduleProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Invigilator Schedule</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invigilator</TableHead>
            <TableHead>Exam</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedules.map((schedule) => {
            const invigilator = invigilators.find(i => i.id === schedule.invigilatorId);
            const exam = exams.find(e => e.id === schedule.examId);
            return (
              <TableRow key={`${schedule.invigilatorId}-${schedule.examId}`}>
                <TableCell>{invigilator?.name}</TableCell>
                <TableCell>{exam?.subject}</TableCell>
                <TableCell>{exam?.date}</TableCell>
                <TableCell>{`${exam?.startTime} - ${exam?.endTime}`}</TableCell>
                <TableCell>{exam?.roomId}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

