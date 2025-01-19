import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questionsArray = [
  {
    questionText: "First Question Text",
    answer: "First Answer",
    placeholder: "First Placeholder",
    questionTypeId: 1,

    choices: [
      { choiceText: "First Question Choice 1", isTrue: false },
      { choiceText: "First Question Choice 2", isTrue: true },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    placeholder: "Second Placeholder",
    questionTypeId: 1,

    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    placeholder: "Second Placeholder",
    questionTypeId: 1,

    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    placeholder: "Second Placeholder",
    questionTypeId: 1,

    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
];

const setId = "cm1ghbg300001bw5je1d2xsa6";

const questionSet = await prisma.questionSet.findUnique({
  where: { id: setId },
});

if (!questionSet) {
  throw new Error(`QuestionSet with ID ${setId} not found`);
}

async function saveSetChanges() {
  const questionsData = questionsArray.map((question) => ({
    questionText: question.questionText,
    answer: question.answer,
    placeholder: question.placeholder,
    // questionTypeId: 1,
    choices: {
      create: question.choices.map((choice) => ({
        choiceText: choice.choiceText,
        isTrue: choice.isTrue,
      })),
    },
  }));

  try {
    // Update the QuestionSet and QuestionType
    const updateQuestionSet = await prisma.questionSet.update({
      where: {
        id: setId, // Use the provided setId to locate the QuestionSet
      },
      data: {
        description: "Updated Description", // Update the description as an example
        questionTypes: {
          upsert: {
            where: { name: "MCQs" }, // Unique field (ensure 'name' is unique in the model)
            create: {
              name: "MCQs",
              title: "MCQs",
              added: true,
              questions: {
                create: questionsData,
              },
            },
            update: {
              title: "MCQs",
              added: true,
              questions: {
                create: questionsData,
              },
            },
          },
        },
      },
      include: {
        questionTypes: {
          include: {
            questions: {
              include: {
                choices: true, // Include the related choices
              },
            },
          },
        },
      },
    });

    return updateQuestionSet; // Return the updated question set
  } catch (error) {
    console.error("Error updating question set:", error);
    throw new Error("Failed to update question set");
  }
}

saveSetChanges();
