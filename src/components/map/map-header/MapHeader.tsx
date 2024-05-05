import Title from '@/components/common/Title';

const HEADER_1 = 'Map';
const DESCRIPTION = '내 주변 동물병원 & 약국을 손쉽게 찾아보세요!';
const MapHeader = () => {
  return (
    <div>
      <Title level={1} text={HEADER_1} className="text-[5.4rem] capitalize font-extrabold" />
      <Title level={5} text={DESCRIPTION} className="text-[1.4rem] font-semibold" />
    </div>
  );
};

export default MapHeader;
