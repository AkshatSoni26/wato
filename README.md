# Using the wato Repository

This guide outlines the steps involved in setting up and running the wato project.

**Prerequisites:**

* A GitHub account
* Node.js and npm installed
* Android Studio

**Steps:**

1. **Fork the Repository:**
   - Visit https://github.com/AkshatSoni26/wato.git and click "Fork".

2. **Clone the Forked Repository:**
   - Open your terminal and navigate to the desired directory.
   - Run: `git clone https://github.com/AkshatSoni26/wato.git`

3. **Install Dependencies:**
   - Navigate to the cloned directory: `cd wato`
   - Run: `npm install`

4. **Start the Android Emulator:**
   - Open Android Studio.
   - Create or select an appropriate AVD.
   - Start the emulator.

5. **Run Metro:**
   - In the terminal, within the project directory, run: `npm start`

6. **Build and Install the Bundle:**
   - Follow Metro's instructions (usually pressing "a") to build the bundle.
   - Metro will guide you through the installation process on your device.

**Additional Notes:**

- Ensure proper permissions for file access during installation.