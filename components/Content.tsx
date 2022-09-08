import React from 'next'
import { FC, ReactNode } from 'react'
import { CopyBlock, googlecode } from 'react-code-blocks'
import snippets from './snippets'

export interface ContentProps {
  sections: SectionProps[]
}

export interface SectionProps {
  title: string
  content: ReactNode
  demo: string
}

export const Content: FC<ContentProps> = ({ sections }): JSX.Element => {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title} className='content-section'>
          <h3 className='content-title'>{section.title}</h3>
          <div className='content-component'>{section.content}</div>
          <div className='content-demo'>
            <CopyBlock
              language={'jsx'}
              text={section.demo}
              showLineNumbers={false}
              theme={googlecode}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>
      ))}
    </>
  )
}
