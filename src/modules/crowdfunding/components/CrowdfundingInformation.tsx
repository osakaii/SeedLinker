interface Props {
  yearOfEstablishment: number;
  franchiseEnterprises: number;
  monthlyTurnover: number;
  numberOfEmployees: number;
}

export default function CrowdfundingInformation(props: Props) {
  return (
    <div>
      <h2 className="text-xl font-[500] pb-4">Franchise information</h2>
      <div>
        <ul className="flex flex-col gap-y-3">
            <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-300">
            <span>Year of Establishment</span><span>{props.yearOfEstablishment}</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-300">
            <span>Franchise Enterprises</span><span>{props.franchiseEnterprises}</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-300">
            <span>Monthly Turnover</span><span>{props.monthlyTurnover}</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-300">
            <span>Number of employees</span><span>{props.numberOfEmployees}</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
