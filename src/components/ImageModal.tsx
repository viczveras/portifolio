'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
}

export default function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1)
      setHasLiked(true)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="relative bg-slate-800 p-4 rounded-lg max-w-2xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="relative">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt="Imagem ampliada"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={handleLike}
                  className={`text-2xl transition-colors duration-300 ${
                    hasLiked ? 'text-red-500' : 'text-white/80 hover:text-red-500'
                  }`}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className="text-white/80">{likes} likes</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}