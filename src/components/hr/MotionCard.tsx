import { motion } from "framer-motion"

const MotionCard = (props: any) => {
    return (
        <>
        <motion.div
        initial={
            props.rowcol === 0 ? { opacity: 0, x: -200 * props.num } : { opacity: 0, y: -200 * props.num}
        }
        whileInView={
            props.rowcol === 0 ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
        }
        viewport={{ once: true }}
        transition={{ ease: 'backInOut', duration: 1.3 }}
        >
            {props.children}
        </motion.div>
        </>
    );
}

export default MotionCard;