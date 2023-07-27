export interface Task {
  name: string;
  isShowIcon: boolean;
  timer: number;
  startLat: number;
  startLon: number;
  endLat: number;
  endLon: number;
  groupId: GroupId;
  actionStartTime: any;
  actionEndTime: any;
}

export interface TaskData {
  taskList: Array<Object>;
  deliveryOption: string;
  experienceRating: string;
}

export enum TaskList {
  Task1 = 'Fahren zum naechsten Stopp',
  Task2 = 'Fahrzeug verlassen (und aufstaendern)',
  Task3 = 'Sendung(en) entnehmen',
  Task4 = 'Zum Hauseingang/Briefkasten laufen',
  Task5 = 'Briefkastenzustellung',

  Task6 = 'Am Hauseingang warten',
  Task7 = 'Haus betreten',
  Task8 = 'Zum Fahrzeug laufen',

  Task9 = 'Sendung(en) zurücklegen',
  Task10 = 'Sendungen sortieren',
  Task11 = 'Fahrzeug schieben',

  Task13 = 'Sonstiges',
  // Task14 = 'Sendungen zurucklegen',
  // Task15 = 'Sendungen zurucklegen',
  // Task16 = 'Auf Fahrzeug steigen',
}

export enum GroupId {
  Group1 = 'Aufgabe',
  Group2 = 'Laufen',
  Group3 = 'Zustellung',
}

export const taskListRecord: Record<TaskList, Task> = {
  [TaskList.Task1]: {
    groupId: GroupId.Group1,
    name: TaskList.Task1,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task2]: {
    groupId: GroupId.Group1,
    name: TaskList.Task2,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task3]: {
    groupId: GroupId.Group1,
    name: TaskList.Task3,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task4]: {
    groupId: GroupId.Group1,
    name: TaskList.Task4,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task5]: {
    groupId: GroupId.Group1,
    name: TaskList.Task5,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task6]: {
    groupId: GroupId.Group1,
    name: TaskList.Task6,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task7]: {
    groupId: GroupId.Group1,
    name: TaskList.Task7,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task8]: {
    groupId: GroupId.Group1,
    name: TaskList.Task8,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task9]: {
    groupId: GroupId.Group1,
    name: TaskList.Task9,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task10]: {
    groupId: GroupId.Group1,
    name: TaskList.Task10,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task11]: {
    groupId: GroupId.Group1,
    name: TaskList.Task11,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
  [TaskList.Task13]: {
    groupId: GroupId.Group1,
    name: TaskList.Task13,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
    actionStartTime: 0,
    actionEndTime: 0,
  },
};
