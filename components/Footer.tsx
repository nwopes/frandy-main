export default function Footer() {
    return (
        <footer className="bg-black/20 text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="font-bold text-xl mb-4 text-gummy-red">FRANDY</p>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                    <a href="https://www.instagram.com/thefrandyofficial/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gummy-red transition-colors group">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0-2c-2.739 0-3.076.01-4.147.058-1.181.048-1.992.212-2.697.486-1.527.595-2.626 1.694-3.221 3.221-.274.706-.438 1.516-.486 2.697C1.675 7.536 1.664 7.874 1.664 10.615v.685c0 2.739.01 3.076.058 4.147.048 1.181.212 1.992.486 2.697.595 1.527 1.694 2.626 3.221 3.221.706.274 1.516.438 2.697.486 1.071.048 1.408.058 4.147.058h.685c2.739 0 3.076-.01 4.147-.058 1.181-.048 1.992-.212 2.697-.486 1.527-.595 2.626-1.694 3.221-3.221.274-.706.438-1.516.486-2.697.048-1.071.058-1.408.058-4.147v-.685c0-2.739-.01-3.076-.058-4.147-.048-1.181-.212-1.992-.486-2.697-.595-1.527-1.694-2.626-3.221-3.221-.706-.274-1.516-.438-2.697-.486C15.391 2.01 15.054 2 12.315 2z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M12.315 5.833a4.782 4.782 0 100 9.564 4.782 4.782 0 000-9.564zm0 2a2.782 2.782 0 110 5.564 2.782 2.782 0 010-5.564z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M18.045 6.88a1.327 1.327 0 11-2.654 0 1.327 1.327 0 012.654 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">@thefrandyofficial</span>
                    </a>
                    <a href="mailto:thefrandyofficial@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-gummy-red transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium">thefrandyofficial@gmail.com</span>
                    </a>
                </div>

                <p className="text-gray-400">© 2024 FRANDY. All rights reserved.</p>
            </div>
        </footer>
    );
}
