import { Text } from "@/app/lib/TextComponents";
import { useQuizStore } from "@/app/store/QuizState";
import { Button, Input } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import React, { ChangeEventHandler, useState } from "react";

interface NumberInputType {
  value: string;
  maxValue: string;
  minValue: string;
  onChange: ChangeEventHandler;
  label: string;
  name: string;
}

type CountType = "increment" | "decrement";

function NumberInput({
  value,
  maxValue,
  onChange,
  minValue,
  label,
  name,
}: NumberInputType) {
  const setNumberOfQuestions = useQuizStore(
    (state: any) => state.setNumberOfQuestions,
  );
  const [isDecrementBtnDisabled, setIsDecrementBtnDisabled] = useState(true);
  function handleCount(type: CountType) {
    if (type == "increment") {
      if (parseInt(value) >= parseInt(maxValue)) {
        setNumberOfQuestions({ [name]: parseInt(maxValue) });
      } else {
        setNumberOfQuestions({ [name]: +value + 1 });
      }
    }
    if (type == "decrement") {
      if (parseInt(value) <= parseInt(minValue)) {
        setIsDecrementBtnDisabled(true);
        setNumberOfQuestions({ [name]: 0 });
      } else {
        setNumberOfQuestions({ [name]: +value - 1 });
      }
    }
    setIsDecrementBtnDisabled(false);
  }

  return (
    <div className="space-y-1">
      <Text className="font-normal">{label}</Text>
      <div className="flex items-end space-x-1">
        <Button
          isDisabled={
            isDecrementBtnDisabled || parseInt(value) <= parseInt(minValue)
          }
          onClick={() => handleCount("decrement")}
          isIconOnly
          variant="bordered"
          className="size-24  border-secondary-500"
        >
          <Minus className="stroke-secondary-800" size={16} />
        </Button>
        <Input
          max={maxValue}
          placeholder="0"
          labelPlacement="outside"
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          variant="bordered"
        />
        <Button
          isDisabled={parseInt(value) >= parseInt(maxValue)}
          onClick={() => handleCount("increment")}
          isIconOnly
          color="secondary"
          variant="solid"
          className="size-24 border-2 border-secondary-500/30"
        >
          <Plus color="black" size={16} />
        </Button>
      </div>
    </div>
  );
}

export default NumberInput;
