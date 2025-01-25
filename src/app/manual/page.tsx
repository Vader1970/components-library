import Link from "next/link";

export default function Manual() {
  return (
    <div className='bg-gray-900 text-white py-10 px-6 min-h-screen'>
      <div className='max-w-5xl mx-auto space-y-8'>
        {/* Page Title */}
        <h1 className='text-3xl font-bold tracking-tight text-center'>
          Using the Component Library with Figma:
          <br /> A Collaborative Workflow for Designers and Developers
        </h1>
        <p className='text-center text-white'>
          The Component Library is a powerful tool designed to streamline website development by providing ready-to-use
          components with corresponding Figma designs.
          <br />
          This guide will walk you through the process of effectively utilizing the Component Library and its associated
          Figma resources.
        </p>

        {/* Documentation Sections */}
        <div className='space-y-6'>
          {/* For Designers */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>For Designers: From Discovery to Prototype</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='text-lg font-semibold'>Explore Components</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>Visit the Component Library website.</li>
                  <li>
                    Navigate to a page (e.g., Layouts, Navbars, Headers) to preview components in a live environment.
                  </li>
                  <li>
                    Evaluate the component&apos;s layout, responsiveness, and animation to see if it aligns with your
                    design requirements.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className='text-lg font-semibold'>Find and Use the Corresponding Figma Component</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>
                    Click on{" "}
                    <a
                      href='https://www.figma.com/design/OzXV7Kp6RssxYySJBpZO1N/Next-JS-Component-Library?node-id=2-33&t=qXOwuMIvRA1Mu8HT-1'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block text-base font-bold text-blue-500 hover:text-blue-400 underline'
                    >
                      <strong>Open Figma Component Library</strong>
                    </a>{" "}
                    to access the Figma file.
                  </li>
                  <li>
                    Navigate to the Folder that matches the components name that you desire (e.g, Layout4 will be
                    located in the Layouts Folder).
                  </li>
                  <li>
                    Use the search function (CTRL-F for Windows / CMD-F for Mac) in Figma to locate the matching
                    wireframe component by name (e.g., Layout4).
                  </li>
                  <li>Copy the selected wireframe component into your own Figma file.</li>
                </ol>
              </div>

              <div>
                <h3 className='text-lg font-semibold'>Style the Component for Prototyping</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>Customize the wireframe component in Figma to match your design requirements.</li>
                  <li>Apply your project&apos;s branding, typography, colours, and other stylistic elements.</li>
                  <li>Create a finalized prototype to pass on to the developer.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>For Developers: From Design to Implementation</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='text-lg font-semibold'>Getting Started</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>Visit the Component Library homepage.</li>
                  <li>
                    Click on{" "}
                    <Link href='/documentation' className='text-blue-500 hover:text-blue-400 underline'>
                      <strong>View Documentation for Installation</strong>
                    </Link>
                    .
                  </li>
                  <li>
                    Follow the provided steps to install the required dependency and configure Tailwind CSS in your
                    application.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className='text-lg font-semibold'>Locate the Required Component</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>
                    Refer to the design handed over by the designer and identify the component name (e.g., Layout4).
                  </li>
                  <li>
                    Visit the Component Library website, navigate to the relevant page (e.g., Layouts), and use the
                    search function to locate the corresponding component (e.g., Layout4).
                  </li>
                  <li>Preview the component to understand its layout, responsiveness, and animation.</li>
                </ol>
              </div>

              <div>
                <h3 className='text-lg font-semibold'>Access and Copy the Code</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>
                    Click <strong>&apos;View Code&apos;</strong> to open the source code of the selected component.
                  </li>
                  <li>
                    Click <strong>&apos;Copy Code&apos;</strong> to copy the component&apos;s code.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className='text-lg font-semibold'>Integrate the Component</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2 mt-2'>
                  <li>In your project, create a new file for the component (e.g., Layout4.tsx).</li>
                  <li>Paste the copied code into the file.</li>
                  <li>
                    Apply custom styling to the component to match the finalized Figma design using Tailwind CSS or
                    another preferred method.
                  </li>
                  <li>Import the component into the page.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Collaborative Workflow */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Collaborative Workflow: Example</h2>
            <div className='mt-4 space-y-6'>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong>Designer&apos;s Steps:</strong> Open the Figma Component Library, locate Layout4 in the
                  Layouts folder, and copy it into your Figma file. Style the wireframe to align with the project&apos;s
                  branding and create a prototype.
                </li>
                <li>
                  <strong>Developer&apos;s Steps:</strong> Use the Component Library website to locate Layout4, preview
                  the component, copy its code, and integrate it into the project. Style the component to match the
                  designer&apos;s finalized prototype.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Key Features of the Component Library</h2>
            <ul className='list-disc list-inside text-gray-300 space-y-2 mt-4'>
              <li>
                <strong>Live Previews:</strong> View components on the website to evaluate their layout, responsiveness,
                and animation before integrating them.
              </li>
              <li>
                <strong>Figma Integration:</strong> Each code component is paired with a wireframe version in Figma,
                ensuring consistency and easy handoff.
              </li>
              <li>
                <strong>Search Functionality:</strong> Quickly find components in both the website and Figma file by
                name.
              </li>
              <li>
                <strong>Customizability:</strong> Components are built for seamless adaptation to your project&apos;s
                needs.
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Tips for a Smooth Workflow</h2>
            <div className='mt-4 space-y-4 text-gray-300'>
              <div>
                <h3 className='font-semibold'>For Designers:</h3>
                <ul className='list-disc list-inside space-y-2 mt-2'>
                  <li>
                    Share your styled Figma file with the development team, clearly linking each component by name to
                    its code equivalent.
                  </li>
                  <li>Regularly explore new components in the library for inspiration and updates.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold'>For Developers:</h3>
                <ul className='list-disc list-inside space-y-2 mt-2'>
                  <li>
                    Collaborate closely with designers to ensure alignment between the Figma design and implementation.
                  </li>
                  <li>Preview the compnent on the website to confirm layout, responsiveness, and animation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
