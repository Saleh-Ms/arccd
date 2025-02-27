import { useCallback } from 'react'
import {
  AiOutlineBold,
  AiOutlineClose,
  AiOutlineEnter,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiParagraph } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { MdOutlineLayersClear } from "react-icons/md";
import { PiCodeBlock, PiQuotes } from "react-icons/pi";
import { TbSpacingVertical } from "react-icons/tb";
import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai'; // Yönlendirme linki simgesi


const MenuBar = ({ editor }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
const [linkUrl, setLinkUrl] = useState('');

const addLink = useCallback(() => {
  editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
  setShowLinkModal(false);
}, [editor, linkUrl]);

if (!editor) {
  return null;
}



//link ekleme alani


// link ekleme alanin sonu
  return (
    <div className="border border-slate-300 rounded-lg p-5 sticky top-3 left-0 right-0 bg-white z-10 flex gap-0.5 flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`editor-btn font-black ${editor.isActive("heading", { level: 1 }) && "active-editor-btn"
          }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`editor-btn font-extrabold ${editor.isActive("heading", { level: 2 }) && "active-editor-btn"
          }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`editor-btn font-semibold ${editor.isActive("heading", { level: 3 }) && "active-editor-btn"
          }`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`editor-btn font-medium ${editor.isActive("heading", { level: 4 }) && "active-editor-btn"
          }`}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`editor-btn font-normal ${editor.isActive("heading", { level: 5 }) && "active-editor-btn"
          }`}
      >
        H5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`editor-btn font-normal ${editor.isActive("heading", { level: 6 }) && "active-editor-btn"
          }`}
      >
        H6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`editor-btn ${editor.isActive("bold") && "active-editor-btn"
          }`}
      >
        <AiOutlineBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn ${editor.isActive("italic") && "active-editor-btn"
          }`}
      >
        <AiOutlineItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn ${editor.isActive("strike") && "active-editor-btn"
          }`}
      >
        <AiOutlineStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`editor-btn ${editor.isActive("code") && "active-editor-btn"
          }`}
      >
        <FiCode />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`editor-btn`}
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`editor-btn`}
      >
        <AiOutlineClose />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn ${editor.isActive("paragraph") && "active-editor-btn"
          }`}
      >
        <BiParagraph />
      </button>

      

      <div className="border border-slate-300 rounded-lg p-5 sticky top-3 left-0 right-0 bg-white z-10 flex gap-0.5 flex-wrap">
      {/* Diğer butonlar burada */}
      {/* Yönlendirme linki ekleme butonu */}
      <button onClick={() => setShowLinkModal(true)} className="editor-btn">
        <AiOutlineLink />
      </button>

      {/* Yönlendirme linki ekleme modalı */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <input
              type="text"
              placeholder="Link URL"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-3"
            />
            <div className="flex justify-end">
              <button onClick={() => setShowLinkModal(false)} className="mr-3 px-4 py-2 border rounded-md">Cancel</button>
              <button onClick={addLink} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Link</button>
            </div>
          </div>
        </div>
      )}
    </div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${editor.isActive("bulletList") && "active-editor-btn"
          }`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${editor.isActive("orderedList") && "active-editor-btn"
          }`}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`editor-btn ${editor.isActive("codeBlock") && "active-editor-btn"
          }`}
      >
        <PiCodeBlock />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`editor-btn ${editor.isActive("blockquote") && "active-editor-btn"
          }`}
      >
        <PiQuotes />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`editor-btn`}
      >
        <TbSpacingVertical />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`editor-btn`}
      >
        <AiOutlineEnter />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`editor-btn`}
      >
        <AiOutlineUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`editor-btn`}
      >
        <AiOutlineRedo />
      </button>
    </div>
  );
};

export default MenuBar;