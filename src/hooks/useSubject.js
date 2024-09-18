import { OPEN } from 'components/kanbanBoard/constants';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useSubject() {
  const [subjectList, setSubjectList] = useState([]);

  function addSubject(newSubjectTitle) {
    const newSubject = {
      id: uuidv4(),
      title: newSubjectTitle,
      taskList: [],
      state: OPEN,
    };
    setSubjectList([...subjectList, newSubject]);
  }

  function deleteSubject(subjectId) {
    setSubjectList(subjectList.filter((subject) => subject.id !== subjectId));
  }

  function addTaskToSubject(subjectId, newTaskTitle) {
    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setSubjectList(
      subjectList.map((subject) =>
        subject.id === subjectId
          ? { ...subject, taskList: [...subject.taskList, newTask] }
          : subject
      )
    );
  }

  function deleteTaskFromSubject(subjectId, taskId) {
    setSubjectList((subjectList) =>
      subjectList.map((subject) => {
        if (subject.id !== subjectId) {
          return subject;
        }

        return {
          ...subject,
          taskList: subject.taskList.filter((task) => task.id !== taskId),
        };
      })
    );
  }

  function toggleTaskInSubject(subjectId, taskId) {
    setSubjectList(
      subjectList.map((subject) => {
        if (subject.id !== subjectId) {
          return subject;
        }

        const newTaskList = subject.taskList.map((task) =>
          task.id === taskId
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        );

        return {
          ...subject,
          taskList: newTaskList,
        };
      })
    );
  }

  return {
    subjectList,
    addSubject,
    deleteSubject,
    taskHooks: { addTaskToSubject, deleteTaskFromSubject, toggleTaskInSubject },
  };
}
