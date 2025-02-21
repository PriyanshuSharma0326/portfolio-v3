import { motion } from "framer-motion";
import { LeftToPositionWrapperProps, SectionrapperProps, XRotateWrapperProps } from "./types";

function SectionWrapper({ children, delay = 0, duration = 1.25 }: SectionrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration, ease: "easeInOut", delay }} 
            viewport={{ once: true, amount: 0.2 }} 
        >
            {children}
        </motion.div>
    );    
}

function XRotateWrapper({ children, className = "", delay = 0, duration = 0.35 }: XRotateWrapperProps) {
    return (
        <motion.div 
            className={className}
            initial={{ opacity: 0, rotateX: 90 }} 
            whileInView={{ opacity: 1, rotateX: 0 }} 
            transition={{ duration, ease: "easeIn", delay }} 
            viewport={{ once: true, amount: 0.2 }} 
        >
            {children}
        </motion.div>
    );
}

function LeftToPositionWrapper({ children, className = "", delay = 0, duration = 0.75 }: LeftToPositionWrapperProps) {
    return (
        <motion.div 
            className={className}
            initial={{ opacity: 0, x: -90 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration, ease: "easeInOut", delay }} 
            viewport={{ once: true, amount: 0.2 }} 
        >
            {children}
        </motion.div>
    );
}

function SocialLinkWrapper({ children, className = "", delay = 0, duration = 0.75 }: LeftToPositionWrapperProps) {
    return (
        <motion.div 
            className={className}
            initial={{ opacity: 0, rotateX: 90 }} 
            whileInView={{ opacity: 1, rotateX: 0 }} 
            transition={{ duration, ease: "easeInOut", delay }} 
            viewport={{ once: true, amount: 0.2 }} 
        >
            {children}
        </motion.div>
    );
}

export {
    SectionWrapper,
    XRotateWrapper,
    LeftToPositionWrapper,
    SocialLinkWrapper,
}
