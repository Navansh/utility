import { useUtilityStore } from '../../../../../store/utility-store';

const template_list = [
  {
    id: 'template1',
    utility: '1:1 Call',
    img: 'https://picsum.photos/100/100',
    claims: 500,
    title: '1:1 Call',
    description:
      'You can get free 1:1 meet link using this utility, just follow the steps and get it within few seconds',
    confirmationTitle: 'Are you sure ?',
    //image: '',
    confirmationDescription: 'You will get one session with me',
    startDate: '2023-07-07',
    endDate: '2024-07-07',
    //claims: { total: 200, claimed: 0 },
    claimLink: 'meet.google.com',
    tags: ['Physical'],
  },
  {
    id: 'template2',
    utility: 'Free Passes',
    img: 'https://picsum.photos/100/101',
    claims: 1000,
  },
  {
    id: 'template3',
    utility: 'Whitelist',
    img: 'https://picsum.photos/100/102',
    claims: 1500,
  },
];

const UtilityTemplatesComponent = () => {
  const onTemplateUpdate = (data) => {
    useUtilityStore.getState().updateTemplate(data);
  };

  return (
    <div className="flex flex-col">
      {template_list.map((template) => (
        <div
          key={template.id}
          className="mb-3 flex cursor-pointer items-center gap-5 rounded-md border border-gray-400 p-4"
          onClick={() => onTemplateUpdate(template)}
        >
          <div className="w-24">
            <img className="rounded-lg" src={template.img} alt={'img'} />
          </div>
          <div>
            <p className="text-xs font-medium">{template.name}</p>
            <h3 className="text-2xl font-bold">{template.utility}</h3>
            <p className="text-xs font-medium">{template.claims}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UtilityTemplatesComponent;
