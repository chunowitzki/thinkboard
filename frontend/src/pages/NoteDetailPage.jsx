import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams, useNavigate, Link } from 'react-router'
import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'

const NoteDetailPage = () => {

  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async() => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log("Error getting the note", error)
        toast.error("Failed to fetch the note")
      } finally {
        setLoading(false)
      }
    }
    fetchNote()
  }, [id])

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>

        </div>
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className='h-5 w-5' />
            Back to Notes
          </Link>
        </div>
        <div className="card bg-base-100">
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage