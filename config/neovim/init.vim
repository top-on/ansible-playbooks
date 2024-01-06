syntax on                   " syntax highlighting
set mouse=a                 " enable mouse click

set ttyfast                 " Speed up scrolling in Vim
set number
set relativenumber

set guicursor=n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50
  \,a:blinkwait700-blinkoff400-blinkon250-Cursor/lCursor
  \,sm:block-blinkwait175-blinkoff150-blinkon175

call plug#begin('~/.vim/plugged')
  Plug 'vim-airline/vim-airline'
  Plug 'morhetz/gruvbox'
  Plug 'preservim/nerdtree'
call plug#end()

" nerdtree setting
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-e> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>
" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif

" tab navigation
map <C-PageUp> gT
map <C-PageDown> gt

