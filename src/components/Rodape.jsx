import { motion } from "framer-motion"

function Rodape() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-transparent text-white text-center py-8 px-4">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Portfólio de Lucas Chambi.
      </p>
    </motion.footer>
  )
}

export default Rodape
