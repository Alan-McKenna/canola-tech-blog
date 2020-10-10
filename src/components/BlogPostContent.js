import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import { colors, fontSize, device } from '../styles'


function ParagraphBlock({ data }) {}
function ListBlock({ data }) {}
function TableBlock({ data }) {}
function CodeBlock({ data }) {}
function WarningBlock({ data }) {}
function LinkToolBlock({ data }) {}
function HeaderBlock({ data }) {}
function DelimiterBlock({ data }) {}
function RawBlock({ data }) {}


function ContentBlock({ blockData }) {
    return (
        <div className={"block-data"}>
            {
                blockData.type === "paragraph" 
                ? <ParagraphBlock/>
                : blockData.type === "list"
                ? <ListBlock/>
                : blockData.type === "table"
                ? <TableBlock/>
                : blockData.type === "code"
                ? <CodeBlock/>
                : blockData.type === "warning"
                ? <WarningBlock/>
                : blockData.type === "linkTool"
                ? <LinkToolBlock/>
                : blockData.type === "header"
                ? <HeaderBlock/>
                : blockData.type === "delimiter"
                ? <DelimiterBlock/>
                : blockData.type === "raw"
                ? <RawBlock/>
                : null
            }
        </div>
    )
}


function BlogPostContent({ content }) {
    const isTablet = useMediaQuery({ query: `(max-width: ${device.tablet})` })
    
    const styles = {
        container: {
        },
    }

    return (
        <div className="blog-post-content" style={styles.container}>
            {content && content.map( (blockData, index) => {
                return (
                    <ContentBlock key={index} blockData={blockData}/>
                )
                })
                }
        </div>
    );
}

export default BlogPostContent;
