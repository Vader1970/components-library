import Link from "next/link";

export default function Manual() {
  return (
    <div className='bg-gray-900 text-white py-10 px-6 min-h-screen'>
      <div className='max-w-5xl mx-auto space-y-8'>
        {/* Page Title */}
        <h1 className='text-3xl font-bold tracking-tight text-center'>Using the Component Library with Figma</h1>
        <p className='text-center text-white'>
          The <strong> Library</strong> is designed to facilitate rapid development of websites, pages, and sections by
          providing ready-to-use components along with corresponding Figma designs. This guide explains how to use the
          Component Library and its accompanying Figma Component Library effectively.
        </p>

        {/* Documentation Sections */}
        <div className='space-y-6'>
          {/* Overview Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Overview</h2>
            <p className='font-semibold'>The Component Library offers:</p>
            <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
              <li>
                <strong>Pre-built Components:</strong> Categorized into folders such as Layouts, Navbars, Headers,
                Contents, etc.
              </li>
              <li>
                <strong>Code for Each Component:</strong> Easily accessible and ready to integrate into your
                application.
              </li>
              <li>
                <strong>Figma Designs:</strong> Matching designs for every component to simplify styling and
                customization.
              </li>
              <li>
                <strong>Live Previews:</strong> View how components look and behave in a browser.
              </li>
            </ul>
          </div>

          {/* Getting Started Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Getting Started</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='font-semibold'>Step 1: Install and Configure the Component Library</h3>
                <ol className='list-decimal list-inside mt-2 text-gray-300 space-y-2'>
                  <li>Visit the Homepage of the Component Library.</li>
                  <li>
                    Click on the{" "}
                    <Link href='/documentation' className='text-blue-500 hover:text-blue-400 underline'>
                      <strong>&apos;View Documentation for Installation&apos;</strong>
                    </Link>{" "}
                    link.
                  </li>
                  <li>Follow the provided steps to:</li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Install the required dependency.</li>
                    <li>Configure Tailwind CSS in your application.</li>
                  </ul>
                  <li>Once installed and configured, you are ready to start using the components.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Figma Library */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Figma Library</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='font-semibold mb-2'>Step 2: Use the Figma Component Library</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>
                    From the Component Library homepage, click on{" "}
                    <a
                      href='https://www.figma.com/design/Fw591yRy6nBbRkd5BtwIHA/Next-JS-Component-Library?node-id=0-1&t=V1yn2GkJLilbxU0d-1'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:text-blue-400 underline'
                    >
                      <strong>&apos;Open Figma Component Library&apos;</strong>
                    </a>
                    .
                  </li>
                  <li>In Figma:</li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Browse through the folders (e.g., Layouts, Navbars, Headers) to find components.</li>
                    <li>Select the desired component (e.g., Layout4).</li>
                    <li>Copy the component into your own Figma file.</li>
                  </ul>
                  <li>Modify the copied component to match your application&apos;s design requirements.</li>
                </ol>
              </div>
            </div>
            <p className='mt-2'>
              <strong>Note:</strong> Each component in Figma has the same name and structure as the corresponding code
              component in the library, making it easy to match and customize.
            </p>
          </div>

          {/* Preview Components */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Components Preview</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='font-semibold mb-2'>Step 3: Preview Components in the Browser</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>To see how a component looks in the browser: </li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Navigate to the category (e.g., Layouts) either from the homepage or the navbar.</li>
                    <li>Use the Search to locate a specific component (e.g., Layout7).</li>
                  </ul>
                  <li>The page will scroll down to the selected component.</li>

                  <li>Observe how the component renders and behaves in a live environment.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Copy and Paste Components */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Copy and Paste Components</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <h3 className='font-semibold mb-2'>Step 4: Integrate Code into Your Application</h3>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>Once you have identified the component you want (e.g., Layout4):</li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>
                      Click on the <strong>&apos;View Code&apos;</strong> button to open the component&apos;s source
                      code.
                    </li>
                    <li>
                      Click <strong>&apos;Copy Code&apos;</strong> to copy the component&apos;s code.
                    </li>
                  </ul>
                  <li>In your application: </li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Create a new file for the component (e.g., Layout4.tsx for a Next JS project).</li>
                    <li>Paste the copied code into the file.</li>
                  </ul>
                  <li>
                    Style the component based on your custom design from your Figma file using Tailwind CSS or other
                    preferred methods.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Component Categories Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Component Categories</h2>
            <p className='text-gray-300 mt-2'>
              The Component Library organizes components into several categories to streamline the selection process.
              Each category contains a wide variety of components tailored to different use cases. Examples include:
            </p>
            <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
              <li>
                <strong>Layouts:</strong> Layout1, Layout2, ... Layout600
              </li>
              <li>
                <strong>Navbars:</strong> Navbar1, Navbar2, etc.
              </li>
              <li>
                <strong>Headers:</strong> Header1, Header2, etc.
              </li>
              <li>
                <strong>Contents:</strong> Content1, Content2, etc.
              </li>
            </ul>
            <p className='text-gray-300 mt-2'>For example, if you choose Layout4, you can find it:</p>
            <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
              <li>In the Figma file under the Layouts folder.</li>
              <li>In the Component Library&apos;s navbar under the Layouts.</li>
            </ul>
          </div>

          {/* Key Features Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Key Features</h2>
            <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
              <li>
                <strong>Figma Integration:</strong> : A unique feature of this library is the seamless connection
                between the code and Figma designs.
              </li>
              <ul className='list-decimal list-inside mt-4 text-gray-300 space-y-2'>
                <li className='pl-8'>Every component has a corresponding design in the Figma file.</li>
                <li className='pl-8'>This allows developers and designers to collaborate effectively.</li>
              </ul>
              <li>
                <strong>Customization:</strong> Components are built to be styled easily, ensuring adaptability to your
                project&apos;s branding and requirements.
              </li>
              <li>
                <strong>Search Functionality:</strong> Quickly locate components by name using the search feature in the
                browser or CTRL-F (Windows) CMD+F (Mac) in the Figma file.
              </li>
            </ul>
          </div>

          {/* Workflow Example */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Workflow Example</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside mt-2 text-gray-300 space-y-2'>
                  <li>
                    <strong>Search for a Component:</strong> Suppose you need Layout4.{" "}
                  </li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Open the Figma Component Library and locate Layout4 in the Layouts folder.</li>
                    <li>Copy Layout4 into your Figma file and modify it as needed.</li>
                  </ul>
                  <li>
                    <strong>Preview the Component:</strong>
                  </li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>Navigate to the Layouts category on the Component Library site.</li>
                    <li>Search for Layout4 and preview it in the browser.</li>
                  </ul>
                  <li>
                    <strong>Integrate into Your Application:</strong>{" "}
                  </li>
                  <ul className='list-disc list-inside ml-6'>
                    <li>View the code for Layout4 and copy it.</li>
                    <li>Paste the code into your application and apply your custom styles.</li>
                  </ul>
                  <li>Once installed and configured, you are ready to start using the components.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tips for Effective Usage */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Tips for Effective Usage</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside mt-2 text-gray-300 space-y-2'>
                  <li>
                    <strong>Consistency:</strong> Always use components from the Component Library to maintain design
                    and development consistency.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> Share the Figma file with your design team for seamless integration
                    between design and development.
                  </li>
                  <li>
                    <strong>Experimentation:</strong> Use the live preview feature to experiment with different
                    components before finalizing your selection.
                  </li>
                  <li>
                    <strong>Updates:</strong> Regularly check for updates to the Component Library to access new
                    components and features.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
