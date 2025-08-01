import React, { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';
import Quill from 'quill';
import { assets } from '../../assets/asset';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCourse = () => {

  const {backendUrl , getToken} = useContext(AppContext)

  const quillRef = useRef(null);
  const editorRef = useRef();

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopop, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  })

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);

      }


    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter
        )
      );

    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);

          }
          return chapter;
        })
      )

    }
  }

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder: chapter.chapterContent.length > 0 ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1 : 1,
            lectureId: uniqid()
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );

    setShowPopup(false);
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    try {
       e.preventDefault();
       if (!image) {
        toast.error('Thumbnail not Selected!');
       }
       const courseData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice:Number(coursePrice),
        discount:Number(discount),
        courseContent : chapters,
       }

       const formData = new FormData()
       formData.append('courseData',JSON.stringify(courseData))
       formData.append('image', image)

       const token = await getToken();
       const {data} = await axios.post(backendUrl + '/api/educator/add-course',formData ,{headers: {Authorization : `Bearer ${token}`}})

       if (data.success) {
        toast.success(data.message)
        setCourseTitle('')
        setCoursePrice(0)
        setDiscount(0)
        setImage(null)
        setChapters([])
        quillRef.current.root.innerHTML = ""
        
       }else{
        toast.error(data.message)
       }

    } catch (error) {
      toast.error(error.message)
    }
  
  }


  useEffect(() => {

    //Initiate Quill only Once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });

    }
  }, [])


return (
  <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 p-4 pt-8 pb-0'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 max-w-2xl w-full text-gray-700'>

      {/* Title */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium'>Course Title</label>
        <input
          onChange={e => setCourseTitle(e.target.value)}
          value={courseTitle}
          type="text"
          placeholder='Type here...'
          className='outline-none py-2.5 px-4 rounded-md border border-gray-300 focus:border-orange-400 transition-all'
          required
        />
      </div>

      {/* Description */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium'>Course Description</label>
        <div ref={editorRef} className='border border-gray-300 rounded-md p-2 bg-white' />
      </div>

      {/* Price + Thumbnail */}
      <div className='flex items-center justify-between flex-wrap gap-6'>
        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium'>Course Price</label>
          <input
            onChange={(e) => setCoursePrice(e.target.value)}
            value={coursePrice}
            type="number"
            placeholder='0'
            className='outline-none py-2.5 px-4 w-32 rounded-md border border-gray-300 focus:border-orange-400 transition-all'
            required
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium'>Course Thumbnail</label>
          <label htmlFor="thumbnailImage" className='flex items-center gap-3 cursor-pointer'>
            <img src={assets.file_upload_icon} alt="Upload" className='p-3 bg-orange-300 rounded-md shadow-sm' />
            <input
              type="file"
              id='thumbnailImage'
              onChange={e => setImage(e.target.files[0])}
              accept='image/*'
              hidden
            />
            {image && <img className='max-h-10 rounded-md border' src={URL.createObjectURL(image)} alt="Preview" />}
          </label>
        </div>
      </div>

      {/* Discount */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium'>Discount %</label>
        <input
          type="number"
          placeholder='0'
          min={0}
          max={100}
          onChange={e => setDiscount(e.target.value)}
          value={discount}
          className='outline-none py-2.5 px-4 w-32 rounded-md border border-gray-300 focus:border-orange-400 transition-all'
          required
        />
      </div>

      {/* Chapters and Lectures */}
      <div className='w-full'>
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className='bg-white border rounded-lg mb-4 shadow-sm'>
            <div className='flex justify-between items-center p-4 border-b'>
              <div className='flex items-center'>
                <img
                  onClick={() => handleChapter('toggle', chapter.chapterId)}
                  src={assets.dropdown_icon}
                  width={14}
                  alt=""
                  className={`mr-2 cursor-pointer transition-transform ${chapter.collapsed && "-rotate-90"}`}
                />
                <span className='font-semibold'>{chapterIndex + 1}. {chapter.chapterTitle}</span>
              </div>
              <span className='text-sm text-gray-500'>{chapter.chapterContent.length} Lectures</span>
              <img src={assets.cross_icon} alt="Remove" className='cursor-pointer w-4' onClick={() => handleChapter('remove', chapter.chapterId)} />
            </div>

            {!chapter.collapsed && (
              <div className='p-4 space-y-2'>
                {chapter.chapterContent.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className='flex justify-between items-center text-sm bg-gray-50 rounded p-2'>
                    <span>
                      {lectureIndex + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} mins - <a href={lecture.lectureUrl} target='_blank' rel='noreferrer' className='text-blue-500 underline'>Link</a> - {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
                    </span>
                    <img src={assets.cross_icon} alt="Remove" className='cursor-pointer w-4' onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)} />
                  </div>
                ))}

                <div
                  className='inline-block bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded cursor-pointer'
                  onClick={() => handleLecture('add', chapter.chapterId)}
                >
                  + Add Lecture
                </div>
              </div>
            )}
          </div>
        ))}

        <div
          className='w-max bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer mt-2'
          onClick={() => handleChapter('add')}
        >
          + Add Chapter
        </div>
      </div>

      {/* Submit Button */}
      <button type='submit' className='bg-black hover:bg-gray-900 text-white w-max py-2.5 px-8 rounded mt-6'>
        ADD
      </button>
    </form>

    {/* Popup Modal for Lecture */}
    {showPopop && (
      <div className='fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-brightness-75 z-50'>
        <div className='bg-white/90 text-gray-700 p-6 rounded-md w-full max-w-sm relative shadow-xl'>
          <h2 className='text-lg font-semibold mb-4'>Add Lecture</h2>

          <div className='mb-3'>
            <label className='text-sm'>Lecture Title</label>
            <input
              type="text"
              className='mt-1 w-full border rounded py-2 px-3 outline-none focus:border-orange-400'
              value={lectureDetails.lectureTitle}
              onChange={(e) => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label className='text-sm'>Duration (minutes)</label>
            <input
              type="number"
              className='mt-1 w-full border rounded py-2 px-3 outline-none focus:border-orange-400'
              value={lectureDetails.lectureDuration}
              onChange={(e) => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label className='text-sm'>Lecture URL</label>
            <input
              type="text"
              className='mt-1 w-full border rounded py-2 px-3 outline-none focus:border-orange-400'
              value={lectureDetails.lectureUrl}
              onChange={(e) => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })}
            />
          </div>

          <div className='flex items-center gap-2 mb-4'>
            <label className='text-sm'>Free Preview?</label>
            <input
              type="checkbox"
              className='scale-125'
              checked={lectureDetails.isPreviewFree}
              onChange={(e) => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
            />
          </div>

          <button
            type='button'
            className='w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded'
            onClick={addLecture}
          >
            Add
          </button>

          <img
            onClick={() => setShowPopup(false)}
            src={assets.cross_icon}
            alt="Close"
            className='absolute top-4 right-4 w-4 cursor-pointer'
          />
        </div>
      </div>
    )}
  </div>
);

}


export default AddCourse
