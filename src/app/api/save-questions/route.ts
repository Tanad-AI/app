import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
const questionsArray = [
  {
    questionText: "First Question Text",
    answer: "First Answer",
    questionTypeId: 1,
    choices: [
      { choiceText: "First Question Choice 1", isTrue: false },
      { choiceText: "First Question Choice 2", isTrue: true },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    questionTypeId: 1,
    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    questionTypeId: 1,

    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
  {
    questionText: "Second Question Text",
    answer: "Second Answer",
    questionTypeId: 1,

    choices: [
      { choiceText: "Second Question Choice 1", isTrue: true },
      { choiceText: "Second Question Choice 2", isTrue: false },
    ],
  },
];

async function saveSetChanges(setId: string, questionSet: any) {
  if (questionSet) {
    const mcqQuestions = questionSet
      .filter((type: any) => type.name === "MCQs") // Find the MCQs section
      .map((type: any) => type.questions) // Extract the questions array
      .flat();
    const trueOrFalseQuestions = questionSet
      .filter((type: any) => type.name === "trueOrFalse") // Find the MCQs section
      .map((type: any) => type.questions) // Extract the questions array
      .flat();
    const fillInTheBlank = questionSet
      .filter((type: any) => type.name === "fillInTheBlank") // Find the MCQs section
      .map((type: any) => type.questions) // Extract the questions array
      .flat();

    const updatedMCQsSet = await prisma.set.update({
      where: { id: setId },
      data: {
        questions: {
          upsert: mcqQuestions.map((question: any) => ({
            where: { id: question.id }, // Use a non-existing ID like -1 if there's no question ID
            create: {
              id: question.id,
              questionText: question.questionText,
              answer: question.answer,
              type: "MCQs",
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
            update: {
              questionText: question.questionText,
              answer: question.answer,
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
          })),
        },
      },
    });
    const updatedTOFsSet = await prisma.set.update({
      where: { id: setId },
      data: {
        questions: {
          upsert: trueOrFalseQuestions.map((question: any) => ({
            where: { id: question.id }, // Use a non-existing ID like -1 if there's no question ID
            create: {
              id: question.id,
              questionText: question.questionText,
              answer: question.answer,
              type: "trueOrFalse",
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
            update: {
              questionText: question.questionText,
              answer: question.answer,
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
          })),
        },
      },
    });
    const updatedFIBSet = await prisma.set.update({
      where: { id: setId },
      data: {
        questions: {
          upsert: fillInTheBlank.map((question: any) => ({
            where: { id: question.id }, // Use a non-existing ID like -1 if there's no question ID
            create: {
              id: question.id,
              questionText: question.questionText,
              answer: question.answer,
              type: "fillInTheBlank",
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
            update: {
              questionText: question.questionText,
              answer: question.answer,
              choices: {
                create: question.choices.map((choice: any) => ({
                  choiceText: choice.choiceText,
                  isTrue: choice.isTrue,
                })),
              },
            },
          })),
        },
      },
    });
  }
}

// API route handling
export async function POST(request: NextRequest) {
  try {
    const { setId, questionSet } = await request.json();
    const updatedSet = await saveSetChanges(setId, questionSet);

    return NextResponse.json(
      {
        message: "Question set saved successfully",
        currentSet: updatedSet,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error details:", error); // Log the full error details

    return NextResponse.json(
      { message: "Failed to save question set", error: error },
      { status: 500 },
    );
  }
}
