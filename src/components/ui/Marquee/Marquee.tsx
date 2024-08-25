import './module.marquee.css'
const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="marquee w-full">
      <p className='w-full text-white text-sm'>{text}</p>
    </div>
  );
};

export default Marquee