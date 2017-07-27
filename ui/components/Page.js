import React from 'react'

const Pages = ({pages}) => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>{
                pages.map((page) => (
                  <tr key={page.id}>
                    <td>{page.id}</td>
                    <td>{page.title}</td>
                    <td>{page.content}</td>
                  </tr>
                    ))
            }
      </tbody>
    </table>
)

export default Pages
