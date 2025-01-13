import {PortableText} from "@portabletext/react"

const TruncatedPortableText = ({blocks, maxLength}: any) => {
  // Function to truncate Portable Text
  const truncatePortableText = (blocks: any, maxLength: any) => {
    let truncatedBlocks = []
    let count = 0

    for (const block of blocks) {
      if (count >= maxLength) {
        break // Exit the loop if maxLength is reached
      }

      if (block._key && block._type === "block") {
        for (const child of block.children) {
          const textLength = child.text.length
          if (count + textLength <= maxLength) {
            // If adding this text won't exceed maxLength, add it
            truncatedBlocks.push({
              ...block,
              children: [child],
            })
            count += textLength
          } else {
            // Otherwise, truncate the text and exit the loop
            const truncatedText = child.text.slice(0, maxLength - count) + "..."
            truncatedBlocks.push({
              ...block,
              children: [{...child, text: truncatedText}],
            })
            count = maxLength // Set count to maxLength to exit loop
            break
          }
        }
      } else {
        // For non-text blocks, simply add them to the truncatedBlocks array
        truncatedBlocks.push(block)
      }
    }

    return truncatedBlocks
  }

  const truncatedBlocks = truncatePortableText(blocks, maxLength)

  return <PortableText value={truncatedBlocks} />
}

export default TruncatedPortableText