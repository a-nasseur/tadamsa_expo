
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useMemo, useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CodeIcon from '@mui/icons-material/Code';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Box, Button, IconButton, styled } from '@mui/material';


const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null
  }

  return (
    <div  className="toolbar" >
      <div>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <UndoIcon fontSize='small' />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <RedoIcon fontSize='small' />
        </button>
      </div>
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FormatBoldIcon fontSize='small'  sx={{ color: editor.isActive('bold') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FormatItalicIcon fontSize='small' sx={{ color: editor.isActive('italic') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <StrikethroughSIcon fontSize='small'  sx={{ color: editor.isActive('strike') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          <CodeIcon fontSize='small'  sx={{ color: editor.isActive('code') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <FormatQuoteIcon fontSize='small'  sx={{ color: editor.isActive('blockquote') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FormatListBulletedIcon fontSize='small'  sx={{ color: editor.isActive('bulletList') ? 'red' : ''}}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FormatListNumberedIcon fontSize='small'  sx={{ color: editor.isActive('orderedList') ? 'red' : ''}}/>
        </button>
      </div>
    </div>
  )
}

export default ({ setContent }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  })

  


  useEffect(() => {
    setContent(editor?.getJSON());
  }, [editor?.state])

  return (
    <div className='editorContainer'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}