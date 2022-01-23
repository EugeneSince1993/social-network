var a = {
  name: 'it-kamasutra.com',
  protocol: "https",
  maxStudentsCount: 10,
  isOnline: true,
  students: ['ivan', 'andreay', 'farid'],
  classroom: {
    teacher: {
      name: 'wew',
      age: 18
    }
  }
};

// shallow copy

var b = {...a};

// deep copy

var b = {...a};
b.classroom = {...a.classroom};
b.classroom.teacher = {...a.classroom.teacher};
b.students = [...a.students];

// changing values

b.name = 'it-incubator.by';
b.isOnline = false;
b.students.push('Marry');
b.classroom.teacher.name = 'Dmitry';
