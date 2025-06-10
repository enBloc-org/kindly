import useMediaQuery from '@/components/hooks/useMediaQuery';
import {
  ConversationFilters,
  type ConversationFilterType,
} from '@/types/messagingTypes';

type ConversationFilterProps = {
  selectedFilter: ConversationFilterType;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<ConversationFilterType>
  >;
};

const ConversationFilter: React.FC<ConversationFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const isBreakPoint = useMediaQuery(1024);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectedFilter(target.value as ConversationFilterType);
  };

  return (
    <div
      className={`relative mx-auto flex min-w-[358px] items-center rounded-full bg-base-80 p-1 text-sm font-bold ${isBreakPoint ? 'my-4' : 'mb-8'}`}
    >
      {/* Sliding background element */}
      <div
        className={`absolute h-[30px] w-1/2 rounded-full bg-monoY transition-all duration-300 ease-in-out ${
          selectedFilter === ConversationFilters.GIVER
            ? 'left-1'
            : 'left-[calc(50%-1px)]'
        }`}
      ></div>

      <button
        className={`relative z-10 h-full min-h-[30px] w-1/2 rounded-full`}
        onClick={clickHandler}
        value={ConversationFilters.GIVER}
      >
        Giver
      </button>
      <button
        className={`relative z-10 h-full min-h-[30px] w-1/2 rounded-full`}
        onClick={clickHandler}
        value={ConversationFilters.RECEIVER}
      >
        Receiver
      </button>
    </div>
  );
};

export default ConversationFilter;
