export interface Task {
  name: string;
  isShowIcon: boolean;
  timer: number;
  startLat: number;
  startLon: number;
  endLat: number;
  endLon: number;
  groupId: GroupId;
}

export interface TaskData{
  taskList:Array<Object>;
  deliveryOption:string;
  experienceRating:string;
}

export enum TaskList {
  Task1 = 'Fahren zum nachsten Stopp',
  Task2 = 'Fahrzeug verlassen',
  Task3 = 'Fahrzeug schieben',
  Task4 = 'Fahrzeug aufstandern',
  Task5 = 'Zum Sendungsbehalter laufen',

  Task6 = 'Handheld bedienen',
  Task7 = 'Entnehmen',
  Task8 = 'Zum Hauseingang laufen',

  Task9 = 'Am Hauseingang warten ',
  Task10 = 'Hauseingang betreten ',
  Task11 = 'Hauseingang verlassen ',
  Task12 = 'Handheld bedienen ',

  Task13 = 'Zum Fahrzeug laufen ',
  Task14 = 'Sendungen zurucklegen',
  Task15 = 'Sendungen zurucklegen',
  Task16 = 'Auf Fahrzeug steigen',

  // Task17 = ':Sendung zustellen',
  // Task18 = ':Am Hauseingang warten',
}

export enum GroupId {

  Group1 = 'Fahren',
  Group2 = 'Laufen',
  Group3 = 'Paketzustellung',
  Group4 = 'VerbundZustellung Brief/Zeitung',
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
  },
  [TaskList.Task3]: {
    groupId: GroupId.Group2,
    name: TaskList.Task3,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
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
  },
  [TaskList.Task5]: {
    groupId: GroupId.Group2,
    name: TaskList.Task5,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task6]: {
    groupId: GroupId.Group3,
    name: TaskList.Task6,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task7]: {
    groupId: GroupId.Group4,
    name: TaskList.Task7,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task8]: {
    groupId: GroupId.Group2,
    name: TaskList.Task8,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task9]: {
    groupId: GroupId.Group3,
    name: TaskList.Task9,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task10]: {
    groupId: GroupId.Group3,
    name: TaskList.Task10,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task11]: {
    groupId: GroupId.Group3,
    name: TaskList.Task11,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task12]: {
    groupId: GroupId.Group3,
    name: TaskList.Task12,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task13]: {
    groupId: GroupId.Group2,
    name: TaskList.Task13,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task14]: {
    groupId: GroupId.Group3,
    name: TaskList.Task14,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task15]: {
    groupId: GroupId.Group4,
    name: TaskList.Task15,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  },
  [TaskList.Task16]: {
    groupId: GroupId.Group1,
    name: TaskList.Task16,
    isShowIcon: true,
    timer: 0,
    startLat: 0,
    startLon: 0,
    endLat: 0,
    endLon: 0,
  }
};
