export let data = {
  tables: [
    {
      id: 1,
      amountOfPeople: 2,
      quantityOfTables: 10,
    },
    {
      id: 2,
      amountOfPeople: 3,
      quantityOfTables: 10,
    },
    {
      id: 3,
      amountOfPeople: 4,
      quantityOfTables: 10,
    },
  ],
  bookings: [
    {
      id: 1,
      date: "2021-10-18",
      timeResevations: [
        {
          id: 1,
          time: "5pm to 6:30pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "Isso nao deveria abrir",
              hasRequest: false
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "isso nao deveria abrir",
              hasRequest: false
            },
          ],
        },
        {
          id: 2,
          time: "7:30pm to 9pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "isso nao deveria abrir",
              hasRequest: false
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: true,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir",
              hasRequest: true
            },
          ],
        },
        {
          id: 3,
          time: "9:30pm to 11pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este nao deveria abrir",
              hasRequest: false
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: true,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir 1",
              hasRequest: true
            },
          ],
        },
      ],
    },
    {
      id: 2,
      date: "2021-10-17",
      timeResevations: [
        {
          id: 1,
          time: "6pm to 7:30pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este nao deveria abrir",
              hasRequest: false
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir 2",
              hasRequest: true
            },
          ],
        },
        {
          id: 2,
          time: "10pm to 11:30pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este nao deveria abrir",
              hasRequest: false
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: true,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir3",
              hasRequest: true
            },
          ],
        },
        {
          id: 3,
          time: "9:30pm to 11pm",
          resevations: [
            {
              id: 1,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: false,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir 4",
              hasRequest: true
            },
            {
              id: 2,
              amountOfPeople: 2,
              name: "Raphael Mesquita",
              confirmed: true,
              mobileNumber: '834280065',
              email: "raphaelbmesquita@gmail.com",
              request: "este pode abrir5",
              hasRequest: true
            },
          ],
        },
      ],
    },
  ],
};
