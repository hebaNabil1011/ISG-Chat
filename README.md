# ISG Internal Chat Application

A WhatsApp Web-style internal chat application built for ISG employees using HTML, CSS, JavaScript, Bootstrap, and PHP.

## Features

- **Authentication**: Login with predefined email/password (no sign-up required)
- **Private Messaging**: 1-to-1 conversations only, users can only see their own chats
- **File Sharing**: Upload and share images, PDFs, Word documents, and text files
- **Real-time Interface**: WhatsApp Web-inspired clean design
- **Multi-language Support**: English and Arabic with RTL support
- **Dark Mode**: Toggle between light and dark themes
- **Message Search**: Search through chat history
- **Notifications**: Browser notifications for new messages
- **Responsive Design**: Works on both desktop and mobile devices
- **Chat Management**: Create new chats and delete existing ones

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 5, Font Awesome icons
- **Backend**: PHP (for file uploads)
- **Storage**: LocalStorage (client-side data persistence)
- **Icons**: Font Awesome 6

## Installation & Setup

### Option 1: Local PHP Server

1. **Prerequisites**:
   - PHP 7.4 or higher
   - Web server (Apache/Nginx) or PHP built-in server

2. **Setup**:
   \`\`\`bash
   # Clone or download the project files
   # Navigate to the project directory
   cd isg-chat-app
   
   # Start PHP built-in server
   php -S localhost:8000
   \`\`\`

3. **Access the application**:
   - Open your browser and go to `http://localhost:8000`
   - Use one of the demo accounts to login

### Option 2: XAMPP/WAMP/MAMP

1. **Install XAMPP/WAMP/MAMP**
2. **Copy project files** to the `htdocs` (XAMPP) or `www` (WAMP/MAMP) directory
3. **Start Apache** from the control panel
4. **Access** via `http://localhost/isg-chat-app`

### Option 3: Static Hosting (Limited Features)

For static hosting (GitHub Pages, Netlify, etc.), the file upload feature won't work, but all other features will function:

1. Upload all files except `upload.php` and `config.php`
2. The app will work with all features except file uploads

## ISG Employee Accounts

All ISG employees can login using their company email and the password `123456`:

| Email | Password | Name |
|-------|----------|------|
| ismail.m@isg-egy.com | 123456 | Ismail M. |
| sanaa.m@isg-egy.com | 123456 | Sanaa M. |
| mohamed.h@isg-egy.com | 123456 | Mohamed H. |
| islam.a@isg-egy.com | 123456 | Islam A. |
| osama.s@isg-egy.com | 123456 | Osama S. |
| hoda.b@isg-egy.com | 123456 | Hoda B. |
| ahmed.b@isg-egy.com | 123456 | Ahmed B. |
| ahmed.az@isg-egy.com | 123456 | Ahmed Az. |
| ahmed.ab@isg-egy.com | 123456 | Ahmed Ab. |
| osama.s2@isg-egy.com | 123456 | Osama S2. |
| asmaa.g@isg-egy.com | 123456 | Asmaa G. |
| faiza.k@isg-egy.com | 123456 | Faiza K. |
| wael.a@isg-egy.com | 123456 | Wael A. |
| mari@isg-egy.com | 123456 | Mari |
| madonna@isg-egy.com | 123456 | Madonna |
| amira.n@isg-egy.com | 123456 | Amira N. |
| ahmed.r@isg-egy.com | 123456 | Ahmed R. |
| maha.n@isg-egy.com | 123456 | Maha N. |
| nada.a@isg-egy.com | 123456 | Nada A. |
| moataz.s@isg-egy.com | 123456 | Moataz S. |
| heba.n@isg-egy.com | 123456 | Heba N. |
| abdelrahim.f@isg-egy.com | 123456 | Abdelrahim F. |
| rana.b@isg-egy.com | 123456 | Rana B. |
| mona.k@isg-egy.com | 123456 | Mona K. |
| mohamed.l@isg-egy.com | 123456 | Mohamed L. |
| hussein.z@isg-egy.com | 123456 | Hussein Z. |
| ahmed.k@isg-egy.com | 123456 | Ahmed K. |

**Total: 27 ISG employees** can access the internal chat system.

## File Structure

\`\`\`
isg-chat-app/
├── index.html          # Login page
├── chat.html           # Main chat interface
├── styles.css          # All CSS styles
├── auth.js             # Authentication logic
├── script.js           # Main application logic
├── upload.php          # File upload handler
├── config.php          # PHP configuration
├── uploads/            # File upload directory (created automatically)
└── README.md           # This file
\`\`\`

## Usage Instructions

### Logging In
1. Open the application in your browser
2. Select your preferred language (English/Arabic)
3. Enter one of the demo email/password combinations
4. Click "Login"

### Starting a New Chat
1. Click the "+" button in the sidebar header
2. Select a user from the dropdown
3. Click "Start Chat"

### Sending Messages
1. Select a chat from the sidebar
2. Type your message in the input field
3. Press Enter or click the send button

### Uploading Files
1. Click the paperclip icon next to the message input
2. Select one or more files (images, PDFs, Word docs, text files)
3. Files will be uploaded and shared in the chat

### Additional Features
- **Dark Mode**: Click the moon/sun icon in the header
- **Search**: Use the search box to find chats or messages
- **Delete Chat**: Click the trash icon in the chat header
- **Logout**: Click the logout icon in the sidebar header

## Customization

### Adding New Users
Edit the `USERS` object in `auth.js`:

\`\`\`javascript
const USERS = {
    'newuser@isg.com': {
        password: 'password123',
        name: 'New User',
        id: 'newuser'
    }
    // ... existing users
};
\`\`\`

Also update the `users` object in `script.js`:

\`\`\`javascript
users = {
    'newuser': { name: 'New User', email: 'newuser@isg.com' }
    // ... existing users
};
\`\`\`

### Styling Customization
Modify the CSS variables in `styles.css`:

\`\`\`css
:root {
    --primary-color: #075e54;    /* Main brand color */
    --secondary-color: #128c7e;  /* Secondary brand color */
    --accent-color: #25d366;     /* Accent color */
    /* ... other variables */
}
\`\`\`

### Language Support
Add new languages by extending the `TRANSLATIONS` object in `auth.js` and implementing the translation logic.

## Security Considerations

⚠️ **Important**: This is a demo application for internal use. For production deployment:

1. **Use HTTPS** for all communications
2. **Implement proper authentication** (JWT tokens, sessions)
3. **Add server-side validation** for all inputs
4. **Use a proper database** instead of LocalStorage
5. **Implement rate limiting** and other security measures
6. **Sanitize file uploads** and restrict file types
7. **Add CSRF protection**

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Troubleshooting

### File Upload Issues
- Ensure PHP is running and `upload.php` is accessible
- Check file permissions on the `uploads` directory
- Verify file size limits in PHP configuration

### LocalStorage Issues
- Clear browser cache and LocalStorage if experiencing data issues
- Check browser console for JavaScript errors

### Styling Issues
- Ensure Bootstrap and Font Awesome CDN links are accessible
- Check for CSS conflicts with browser extensions

## Support

For technical support or questions about this application, please contact the ISG IT department.

## License

This application is developed for internal use at ISG. All rights reserved.
