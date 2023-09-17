import { DocumentIcon } from "@heroicons/react/solid";

interface Plan {
  name: string;
  file?: string;
  type?: string;
}

interface Props {
  plans: Plan[];
}

export default function ProjectPlan(props: Props) {
  return (
    <div className="bg-slate-100 max-w-[400px] p-8 rounded-lg">
      <h3 className="pb-4 text-xl">Project plan</h3>
      <ul className="flex flex-col gap-y-2">
        {props.plans.map((plan) => (
          <li className="flex gap-x-2 items-center" key={plan.name}>
            <div>
              <DocumentIcon className="w-5 h-5 text-red-400" />
            </div>
            <div>{plan.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
