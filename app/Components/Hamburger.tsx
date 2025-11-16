import { motion } from "framer-motion";

const Hamburger = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
    return (
      <motion.div
        onClick={() => setOpen(!open)}
        className="w-8 h-8 flex flex-col justify-center gap-[6px] cursor-pointer"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-full h-[3px] bg-white"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block w-full h-[3px] bg-white"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-full h-[3px] bg-white"
        />
      </motion.div>
    );
  };
  
  export default Hamburger