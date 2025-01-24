import Link from "next/link";

export default function Manual() {
  return (
    <div className='bg-gray-900 text-white py-10 px-6 min-h-screen'>
      <div className='max-w-5xl mx-auto space-y-8'>
        {/* Page Title */}
        <h1 className='text-3xl font-bold tracking-tight text-center'>
          Using the Component Library with Figma:
          <br />A Comprehensive Guide
        </h1>
        <p className='text-center text-white'>
          The Component Library is a powerful tool designed to streamline website development by providing ready-to-use
          components with corresponding Figma designs. This guide will walk you through the process of effectively
          utilizing the Component Library and its associated Figma resources.
        </p>

        {/* Documentation Sections */}
        <div className='space-y-6'>
          {/* Getting Started Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Getting Started</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside mt-2 text-gray-300 space-y-2'>
                  <li>Visit the Component Library homepage.</li>
                  <li>
                    Click on the{" "}
                    <Link href='/documentation' className='text-blue-500 hover:text-blue-400 underline'>
                      <strong>&apos;View Documentation for Installation&apos;</strong>
                    </Link>{" "}
                    .
                  </li>
                  <li>
                    Follow the provided steps to install the required dependency and configure Tailwind CSS in your
                    application.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Figma Library */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Accessing the Figma Library</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>
                    From the Component Library homepage, click on{" "}
                    <a
                      href='https://www.figma.com/design/OzXV7Kp6RssxYySJBpZO1N/Next-JS-Component-Library?node-id=2-33&t=qXOwuMIvRA1Mu8HT-1'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:text-blue-400 underline'
                    >
                      <strong>&apos;Open Figma Component Library&apos;</strong>
                    </a>
                    .
                  </li>
                  <li>In Figma, browse through folders like Layouts, Navbars, and Headers to find components.</li>
                  <li>Select your desired component (e.g., Layout4) and copy it into your Figma file.</li>
                  <li>Modify the copied component to match your application&apos;s design requirements.</li>
                </ol>
              </div>
            </div>
            <p className='mt-2'>
              <strong>Note:</strong> Each component in Figma has the same name and structure as the corresponding code
              component in the library, making it easy to match, search, and customize.
            </p>
          </div>

          {/* Preview Components */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Previewing Components</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>Navigate to the relevant page (e.g., Layouts) from the homepage or navbar. </li>
                  <li>
                    Use the search function to locate specific components. Search by the components name e.g., Layout 4.
                  </li>
                  <li>
                    The page will automatically scroll to the selected component, allowing you to observe its appearance
                    and behaviour in a live environment.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Copy and Paste Components */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Integrating Components into Your Application</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ol className='list-decimal list-inside text-gray-300 space-y-2'>
                  <li>Identify the component you want to use (e.g., Layout4).</li>
                  <li>
                    Click <strong>&apos;View Code&apos;</strong> to access the component&apos;s source code.
                  </li>
                  <li>
                    Click <strong>&apos;Copy Code&apos;</strong> to copy the component&apos;s code.
                  </li>
                  <li>In your application, create a new file for the component (e.g., Layout4.tsx).</li>
                  <li>Paste the copied code into the file.</li>
                  <li>
                    Style the component based on your custom design from your Figma file using Tailwind CSS or other
                    preferred methods.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Key Features</h2>
            <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
              <li>
                <strong>Figma Integration:</strong> : Every component has a corresponding design in the Figma file,
                facilitating seamless collaboration between developers and designers
              </li>
              <li>
                <strong>Customization:</strong> Components are built for easy styling, ensuring adaptability to your
                project&apos;s branding and requirements.
              </li>
              <li>
                <strong>Search Functionality:</strong> Quickly locate components by name using the search feature in the
                browser or CTRL-F (Windows) / CMD+F (Mac) in the Figma file.
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
                    <strong>Search for a Component:</strong> Open the Figma Component Library, locate Layout4 in the
                    Layouts folder, and copy it into your Figma file.
                  </li>
                  <li>
                    <strong>Preview the Component:</strong> Navigate to the Layouts page on the Component Library
                    website and search for Layout4 to preview it in the browser.
                  </li>
                  <li>
                    <strong>Integrate into Your Application:</strong> View the code for Layout4, copy it, and paste it
                    into your application. Apply your custom styles as needed.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tips for Effective Usage */}
          <div className='bg-black p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold'>Tips for Effective Usage</h2>
            <div className='mt-4 space-y-6'>
              <div>
                <ul className='list-disc list-inside mt-4 text-gray-300 space-y-2'>
                  <li>Maintain consistency by always using components from the Component Library.</li>
                  <li>
                    Share the Figma file with your design team for seamless integration between design and development.
                  </li>
                  <li>
                    Experiment with different components using the live preview feature before finalizing your
                    selection.
                  </li>
                  <li>Regularly check for updates to access new components and features.</li>
                </ul>
              </div>
              <p className='mt-2'>
                By following this guide, you will be able to leverage the full potential of the Component Library and
                its Figma integration, significantly enhancing your development workflow and ensuring consistency across
                your projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
