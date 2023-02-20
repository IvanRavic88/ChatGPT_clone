"use client";
import useSRW from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSRW("models", fetchModels);

  const { data: model, mutate: setModel } = useSRW("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
