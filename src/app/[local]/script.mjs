import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Inputs = [
  {
    label: "subject",
    placeholder: "history",
    name: "subject",
    type: "text",
    required: true,
  },
  {
    label: "Term / Semester",
    placeholder: "Second",
    name: "termSemester",
    type: "text",
    required: true,
  },
  {
    label: "Class",
    placeholder: "12 grade",
    name: "class",
    type: "text",
    required: true,
  },
  {
    label: "Type",
    placeholder: "Final",
    name: "type",
    type: "text",
    required: true,
  },
  {
    label: "Number of Marks",
    placeholder: "20",
    name: "numberOfMarks",
    type: "number",
    required: false,
  },
  {
    label: "Day of the exam",
    placeholder: "Monday",
    name: "dayOfTheExam",
    type: "text",
    required: false,
  },
  {
    label: "Date of the exam",
    placeholder: "12-4-2023",
    name: "dateOfTheExam",
    type: "text",
    required: false,
  },
  {
    label: "Duration in hours",
    placeholder: "2 hours",
    name: "durationInHours",
    type: "number",
    required: false,
  },
];

// async function CreateHeaderAttributes(headerId) {
//   Inputs.forEach(async (input) => {
//     const createAttributes = await prisma.header_atrribute.createMany({
//       data: {
//         header_id: headerId,
//         label: input.label,
//         name: input.name,
//         placeholder: input.placeholder,
//         type: input.type,
//         required: input.required,
//       },
//     });
//   });
// }
// async function CreateHeader(name) {
//   await prisma.header.create({
//     data: {
//       name,
//     },
//   });
// }

async function CreateHeaderWithAttributes(name, Inputs) {
  // Create the header
  const header = await prisma.header.create({
    data: {
      name,
    },
  });

  // Iterate over the inputs to create header attributes
  await Promise.all(
    Inputs.map(async (input) => {
      await prisma.header_atrribute.create({
        data: {
          header: { connect: { id: header.id } }, // Connect the header to the attribute
          label: input.label,
          name: input.name,
          placeholder: input.placeholder,
          type: input.type,
          required: input.required,
        },
      });
    }),
  );

  return header;
}

CreateHeaderWithAttributes("header 4", Inputs)
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
