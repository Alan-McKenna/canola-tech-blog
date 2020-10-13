import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import { colors, fontSize, device } from '../styles'


function ParagraphBlock({ data }) {
    return (
        <div className="paragraph-block">
            <p>{data.text}</p>
        </div>
    )
}

function ListBlock({ data }) {
    return (
        <div className="list-block">
            {Array.isArray(data) && 
            data.map(function(element, index){
                return (<li key={index}>{element}</li>)
            })}
        </div>
    )

}

function TableBlock({ data }) {

    const renderHeader = (data) => {
        return (Array.isArray(data) && Array.isArray(data[0]) &&
            data[0].map(function(element, index){
                return (<th key={index}>{element}</th>)
        }))
    }

    const renderFields = (data) => {
        return (Array.isArray(data) &&
            data.slice(1).map(function(element, index){
                return (<tr key={index}><td>{element}</td></tr>)
        }))
    }

    return (
        <div className="table-block">
            <table>
                <tbody>
                    <tr>
                    {renderHeader(data)}
                    </tr>
                    {renderFields(data)}
                </tbody>
            </table>
        </div>
    )

}

function CodeBlock({ data }) {
    return (
        <div className="code-block">
            <samp>{data.code}</samp>
        </div>
    )
    
}

function HeaderBlock({ data }) {
    return (
        <div className="header-block">
            <h2>{data.text}</h2>
        </div>
    )

}

function DelimiterBlock({ data }) {
    const styles = {
        rounded: {
            borderTop: '8px solid #bbb',
            borderRadius: '5px'
          }
    }
    return (
        <div className="delimiter-block">
            <hr style={styles.rounded}></hr>
        </div>
    )

}

function RawBlock({ data }) {
    return (
        <div className="raw-html-block">

        </div>
    )

}

function WarningBlock({ data }) {
    return (
        <div className="warning-block">

        </div>
    )

}

function LinkToolBlock({ data }) {
    return (
        <div className="link-block">

        </div>
    )

}

function ContentBlock({ blockData }) {
    return (
        <div className={"block-data"}>
            {
                blockData.type === "paragraph" 
                ? <ParagraphBlock data={blockData.data}/>
                : blockData.type === "list"
                ? <ListBlock data={blockData.data}/>
                : blockData.type === "table"
                ? <TableBlock data={blockData.data}/>
                : blockData.type === "code"
                ? <CodeBlock data={blockData.data}/>
                : blockData.type === "warning"
                ? <WarningBlock data={blockData.data}/>
                : blockData.type === "linkTool"
                ? <LinkToolBlock data={blockData.data}/>
                : blockData.type === "header"
                ? <HeaderBlock data={blockData.data}/>
                : blockData.type === "delimiter"
                ? <DelimiterBlock data={blockData.data}/>
                : blockData.type === "raw"
                ? <RawBlock data={blockData.data}/>
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
            {Array.isArray(content) && content.map( (blockData, index) => {
                return (
                    blockData && <ContentBlock key={index} blockData={blockData}/>
                )
                })
                }
        </div>
    );
}

export default BlogPostContent;
