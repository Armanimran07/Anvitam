import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { generateContentDescription } from '../services/geminiService';
import { supabase } from '../services/supabaseClient';
import { Trash2, Plus, Sparkles, LogOut, BarChart as ChartIcon, FileText, Layout as LayoutIcon, ShoppingBag, Briefcase, MessageSquare, Mail, Loader2, Edit, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Mock Analytics Data (Can also be moved to DB later)
const ANALYTICS_DATA = [
  { name: 'Mon', visitors: 120 },
  { name: 'Tue', visitors: 150 },
  { name: 'Wed', visitors: 200 },
  { name: 'Thu', visitors: 180 },
  { name: 'Fri', visitors: 250 },
  { name: 'Sat', visitors: 190 },
  { name: 'Sun', visitors: 140 },
];

const Admin: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'blog' | 'analytics' | 'shop' | 'services' | 'messages'>('analytics');

  // Check Auth Session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setAuthLoading(false);
    if (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };



  // Content State
  const {
    projects, blogs, services, digitalProducts, messages,
    addProject, addBlog, addService, addDigitalProduct,
    deleteProject, deleteBlog, deleteService, deleteDigitalProduct, deleteMessage,
    updateProject, updateBlog, updateService, updateDigitalProduct
  } = useContent();

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null); // Track if editing
  const [successMessage, setSuccessMessage] = useState(''); // Success feedback

  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');
  const [newItemLocation, setNewItemLocation] = useState('');
  const [newItemYear, setNewItemYear] = useState('');
  const [newItemImage, setNewItemImage] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemFullDescription, setNewItemFullDescription] = useState('');
  const [newItemGallery, setNewItemGallery] = useState(''); // New: Gallery URLs
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemLink, setNewItemLink] = useState('');
  const [newItemIcon, setNewItemIcon] = useState('PenTool');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show success message temporarily
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const resetForm = () => {
    setEditingId(null);
    setNewItemTitle('');
    setNewItemCategory('');
    setNewItemLocation('');
    setNewItemYear('');
    setNewItemImage('');
    setNewItemDescription('');
    setNewItemFullDescription('');
    setNewItemGallery('');
    setNewItemPrice('');
    setNewItemLink('');
    setNewItemIcon('PenTool');
    setIsSubmitting(false);
  };

  const handleGenerateAI = async (type: 'project' | 'blog') => {
    // Only verify title is present
    if (!newItemTitle) {
      alert("Please enter a title first so AI knows what to write about.");
      return;
    }

    setIsGenerating(true);
    try {
      const text = await generateContentDescription(newItemTitle, type);
      setNewItemDescription(text);
    } catch (e) {
      console.error("AI Generation failed:", e);
      alert("Failed to generate content. Check console/API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEditProject = (item: any) => {
    setEditingId(item.id);
    setNewItemTitle(item.title);
    setNewItemCategory(item.category);
    setNewItemLocation(item.location || '');
    setNewItemYear(item.year || '');
    setNewItemImage(item.image);
    setNewItemDescription(item.description);
    setNewItemFullDescription(item.fullDescription || item.description || '');
    // Flatten gallery objects to simple newline-separated string
    setNewItemGallery(item.gallery ? item.gallery.map((g: any) => g.url).join('\n') : '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditBlog = (item: any) => {
    setEditingId(item.id);
    setNewItemTitle(item.title);
    setNewItemImage(item.image);
    setNewItemDescription(item.content || item.excerpt || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditService = (item: any) => {
    setEditingId(item.id);
    setNewItemTitle(item.title);
    setNewItemDescription(item.description);
    setNewItemCategory(item.valueProps ? item.valueProps.join(', ') : '');
    setNewItemIcon(item.icon);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditProduct = (item: any) => {
    setEditingId(item.id);
    setNewItemTitle(item.title);
    setNewItemPrice(item.price);
    setNewItemLink(item.link);
    setNewItemImage(item.image);
    setNewItemCategory(item.tags ? item.tags.join(', ') : '');
    setNewItemDescription(item.description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const projectData = {
        title: newItemTitle,
        category: newItemCategory || 'Uncategorized',
        location: newItemLocation || 'Vadodara',
        year: newItemYear || new Date().getFullYear().toString(),
        image: newItemImage || `https://picsum.photos/1200/800?random=${Date.now()}`,
        description: newItemDescription,
        fullDescription: newItemFullDescription || newItemDescription,
        gallery: newItemGallery.split('\n').filter(url => url.trim() !== '').map(url => ({ url: url.trim(), caption: '' })),
        isFeatured: false,
      };

      if (editingId) {
        await updateProject(editingId, projectData);
        setSuccessMessage('Project updated successfully!');
      } else {
        await addProject({ id: crypto.randomUUID(), ...projectData });
        setSuccessMessage('Project added successfully!');
      }
      resetForm();
    } catch (error) {
      console.error(error);
      alert('Error saving project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const blogData = {
        title: newItemTitle,
        date: new Date().toLocaleDateString(),
        author: 'Archana',
        image: newItemImage || `https://picsum.photos/800/600?random=${Date.now()}`,
        excerpt: newItemDescription.substring(0, 100) + '...',
        content: newItemDescription,
      };

      if (editingId) {
        await updateBlog(editingId, blogData);
        setSuccessMessage('Post updated successfully!');
      } else {
        await addBlog({ id: crypto.randomUUID(), ...blogData });
        setSuccessMessage('Post published successfully!');
      }
      resetForm();
    } catch (error) {
      console.error(error);
      alert('Error saving blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const serviceData = {
        title: newItemTitle,
        description: newItemDescription,
        icon: newItemIcon,
        valueProps: newItemCategory.split(',').map(s => s.trim()),
      };

      if (editingId) {
        await updateService(editingId, serviceData);
        setSuccessMessage('Service updated successfully!');
      } else {
        await addService({ id: crypto.randomUUID(), ...serviceData });
        setSuccessMessage('Service added successfully!');
      }
      resetForm();
    } catch (error) {
      alert('Error saving service');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const productData = {
        title: newItemTitle,
        description: newItemDescription,
        price: newItemPrice || 'Free',
        link: newItemLink || '#',
        image: newItemImage || `https://picsum.photos/800/600?random=${Date.now()}`,
        tags: newItemCategory.split(',').map(s => s.trim()),
      };

      if (editingId) {
        await updateDigitalProduct(editingId, productData);
        setSuccessMessage('Product updated successfully!');
      } else {
        await addDigitalProduct({ id: crypto.randomUUID(), ...productData });
        setSuccessMessage('Product added successfully!');
      }
      resetForm();
    } catch (error) {
      alert('Error saving product');
    } finally {
      setIsSubmitting(false);
    }
  }

  // ... (rest of the file likely untouched, but logic needs to be inserted into return)

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
        <div className="bg-white p-8 shadow-xl max-w-sm w-full">
          <h2 className="text-2xl font-serif mb-6 text-center">Staff Access</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 outline-none focus:border-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 outline-none focus:border-black"
              required
            />
            <button
              disabled={authLoading}
              className="w-full bg-black text-white p-3 font-bold uppercase hover:bg-gray-800 transition flex justify-center"
            >
              {authLoading ? <Loader2 className="animate-spin" /> : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const NavButton = ({ id, icon: Icon, label }: { id: typeof activeTab, icon: any, label: string }) => (
    <button
      onClick={() => { setActiveTab(id); resetForm(); }}
      className={`w-full text-left p-3 flex items-center space-x-3 rounded-lg transition-colors ${activeTab === id ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-600'}`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif font-bold">Anvitam Admin</h2>
          <p className="text-xs text-gray-500 mt-1 truncate">{session.user.email}</p>
        </div>
        <nav className="p-4 space-y-2">
          <NavButton id="analytics" icon={ChartIcon} label="Dashboard" />
          <NavButton id="messages" icon={MessageSquare} label="Inquiries" />
          <NavButton id="projects" icon={LayoutIcon} label="Projects" />
          <NavButton id="blog" icon={FileText} label="Journal" />
          <NavButton id="shop" icon={ShoppingBag} label="Shop / Products" />
          <NavButton id="services" icon={Briefcase} label="Services" />

          <div className="pt-8 mt-8 border-t border-gray-100">
            <button onClick={handleLogout} className="w-full text-left p-3 flex items-center space-x-3 text-red-500 hover:bg-red-50 rounded-lg">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Success Message Banner */}
        {successMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg flex items-center space-x-2 animate-bounce z-50">
            <CheckCircle size={20} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-serif">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-xs font-bold uppercase">Total Projects</h3>
                <p className="text-4xl font-serif mt-2">{projects.length}</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-xs font-bold uppercase">Messages</h3>
                <p className="text-4xl font-serif mt-2">{messages.length}</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-xs font-bold uppercase">Products</h3>
                <p className="text-4xl font-serif mt-2">{digitalProducts.length}</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-500 text-xs font-bold uppercase">Weekly Visitors</h3>
                <p className="text-4xl font-serif mt-2">1,230</p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100 h-96">
              <h3 className="text-lg font-bold mb-6">Visitor Traffic</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ANALYTICS_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: '#f4f4f4' }} contentStyle={{ border: 'none', borderRadius: '4px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="visitors" fill="#1a1a1a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Messages View */}
        {activeTab === 'messages' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif">Inquiries ({messages.length})</h2>
            </div>

            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-20 bg-white border border-gray-200 text-gray-400">
                  No messages yet.
                </div>
              ) : (
                messages.map(msg => (
                  <div key={msg.id} className="bg-white p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-bold text-lg text-anvitam-charcoal">{msg.name}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{msg.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-anvitam-green mb-4">
                        <Mail size={14} />
                        <a href={`mailto:${msg.email}`} className="hover:underline">{msg.email}</a>
                      </div>
                      <p className="text-gray-600 bg-gray-50 p-4 rounded-lg font-serif">
                        "{msg.message}"
                      </p>
                    </div>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded transition-colors"
                      title="Delete Message"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Project Manager View */}
        {activeTab === 'projects' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif">Manage Projects</h2>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                {editingId ? <Edit size={18} className="mr-2 text-blue-500" /> : <Plus size={18} className="mr-2" />}
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h3>
              <form onSubmit={handleAddProject} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Project Name"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Category (e.g. Residential)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Location (e.g. Vadodara)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemLocation}
                    onChange={(e) => setNewItemLocation(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Year (e.g. 2024)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemYear}
                    onChange={(e) => setNewItemYear(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Image URL (e.g. https://...)"
                  className="border p-3 outline-none focus:border-black"
                  value={newItemImage}
                  onChange={(e) => setNewItemImage(e.target.value)}
                />
                <textarea
                  placeholder="Gallery Images (Optional) - One URL per line"
                  rows={4} // Increased height for multiple URLs
                  className="w-full border p-3 outline-none focus:border-black font-mono text-sm"
                  value={newItemGallery}
                  onChange={(e) => setNewItemGallery(e.target.value)}
                />
                <div className="relative">
                  <textarea
                    placeholder="Short Description (Card View)"
                    rows={2}
                    className="w-full border p-3 outline-none focus:border-black pr-32"
                    value={newItemDescription}
                    onChange={(e) => setNewItemDescription(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  placeholder="Full Description (Detail Page) - Paragraphs"
                  rows={5}
                  className="w-full border p-3 outline-none focus:border-black"
                  value={newItemFullDescription}
                  onChange={(e) => setNewItemFullDescription(e.target.value)}
                />
                <div className="flex space-x-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-200 text-gray-700 py-3 px-6 font-bold uppercase hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 text-white py-3 uppercase font-bold tracking-widest disabled:opacity-50 flex justify-center ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'}`}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : (editingId ? 'Update Project' : 'Add Project')}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white shadow-sm border border-gray-100">
              {projects.map(p => (
                <div key={p.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <img src={p.image} alt={p.title} className="w-16 h-16 object-cover bg-gray-200" />
                    <div>
                      <h4 className="font-bold">{p.title}</h4>
                      <p className="text-sm text-gray-500">{p.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleEditProject(p)} className="text-blue-400 hover:text-blue-600 p-2" title="Edit">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteProject(p.id)} className="text-red-400 hover:text-red-600 p-2" title="Delete">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Manager View */}
        {activeTab === 'blog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif">Manage Journal</h2>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                {editingId ? <Edit size={18} className="mr-2 text-blue-500" /> : <Plus size={18} className="mr-2" />}
                {editingId ? 'Edit Post' : 'Add New Post'}
              </h3>
              <form onSubmit={handleAddBlog} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Post Title"
                  className="border p-3 outline-none focus:border-black"
                  value={newItemTitle}
                  onChange={(e) => setNewItemTitle(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border p-3 outline-none focus:border-black"
                  value={newItemImage}
                  onChange={(e) => setNewItemImage(e.target.value)}
                />
                <div className="relative">
                  <textarea
                    placeholder="Content / Excerpt"
                    rows={5}
                    className="w-full border p-3 outline-none focus:border-black pr-32"
                    value={newItemDescription}
                    onChange={(e) => setNewItemDescription(e.target.value)}
                    required
                  />
                  {!editingId && (
                    <button
                      type="button"
                      onClick={() => handleGenerateAI('blog')}
                      disabled={isGenerating}
                      className="absolute top-2 right-2 flex items-center space-x-1 bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded hover:bg-purple-100 transition"
                    >
                      <Sparkles size={12} />
                      <span>{isGenerating ? 'Writing...' : 'AI Draft'}</span>
                    </button>
                  )}
                </div>
                <div className="flex space-x-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-200 text-gray-700 py-3 px-6 font-bold uppercase hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 text-white py-3 uppercase font-bold tracking-widest disabled:opacity-50 flex justify-center ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'}`}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : (editingId ? 'Update Post' : 'Publish Post')}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white shadow-sm border border-gray-100">
              {blogs.map(b => (
                <div key={b.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <img src={b.image} alt={b.title} className="w-16 h-16 object-cover bg-gray-200" />
                    <div>
                      <h4 className="font-bold">{b.title}</h4>
                      <p className="text-sm text-gray-500">{b.date} by {b.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleEditBlog(b)} className="text-blue-400 hover:text-blue-600 p-2" title="Edit">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteBlog(b.id)} className="text-red-400 hover:text-red-600 p-2" title="Delete">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shop Manager View */}
        {activeTab === 'shop' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif">Manage Shop / Digital Products</h2>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                {editingId ? <Edit size={18} className="mr-2 text-blue-500" /> : <Plus size={18} className="mr-2" />}
                {editingId ? 'Edit Product' : 'Add New Product'}
              </h3>
              <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Product Title"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Price (e.g. ₹999)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Purchase Link (Topmate, etc.)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemLink}
                    onChange={(e) => setNewItemLink(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border p-3 outline-none focus:border-black"
                  value={newItemImage}
                  onChange={(e) => setNewItemImage(e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  rows={3}
                  className="w-full border p-3 outline-none focus:border-black"
                  value={newItemDescription}
                  onChange={(e) => setNewItemDescription(e.target.value)}
                  required
                />
                <div className="flex space-x-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-200 text-gray-700 py-3 px-6 font-bold uppercase hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 text-white py-3 uppercase font-bold tracking-widest disabled:opacity-50 flex justify-center ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'}`}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : (editingId ? 'Update Product' : 'Add Product')}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white shadow-sm border border-gray-100">
              {digitalProducts.map(p => (
                <div key={p.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <img src={p.image} alt={p.title} className="w-16 h-16 object-cover bg-gray-200" />
                    <div>
                      <h4 className="font-bold">{p.title}</h4>
                      <p className="text-sm text-gray-500">{p.price} - <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Link</a></p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleEditProduct(p)} className="text-blue-400 hover:text-blue-600 p-2" title="Edit">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteDigitalProduct(p.id)} className="text-red-400 hover:text-red-600 p-2" title="Delete">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Manager View */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif">Manage Services</h2>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                {editingId ? <Edit size={18} className="mr-2 text-blue-500" /> : <Plus size={18} className="mr-2" />}
                {editingId ? 'Edit Service' : 'Add New Service'}
              </h3>
              <form onSubmit={handleAddService} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Service Title"
                    className="border p-3 outline-none focus:border-black"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    required
                  />
                  <select
                    value={newItemIcon}
                    onChange={(e) => setNewItemIcon(e.target.value)}
                    className="border p-3 outline-none focus:border-black bg-white"
                  >
                    <option value="PenTool">Design (Pen)</option>
                    <option value="Layout">Layout (Grid)</option>
                    <option value="Sprout">Nature (Sprout)</option>
                    <option value="FlaskConical">R&D (Flask)</option>
                  </select>
                </div>
                <textarea
                  placeholder="Service Description"
                  rows={3}
                  className="w-full border p-3 outline-none focus:border-black"
                  value={newItemDescription}
                  onChange={(e) => setNewItemDescription(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Value Props (comma separated lines)"
                  rows={3}
                  className="w-full border p-3 outline-none focus:border-black"
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                />
                <div className="flex space-x-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-200 text-gray-700 py-3 px-6 font-bold uppercase hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 text-white py-3 uppercase font-bold tracking-widest disabled:opacity-50 flex justify-center ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'}`}
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : (editingId ? 'Update Service' : 'Add Service')}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white shadow-sm border border-gray-100">
              {services.map(s => (
                <div key={s.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50">
                  <div>
                    <h4 className="font-bold flex items-center">
                      <span className="bg-gray-200 text-xs px-2 py-1 rounded mr-2">{s.icon}</span>
                      {s.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleEditService(s)} className="text-blue-400 hover:text-blue-600 p-2" title="Edit">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteService(s.id)} className="text-red-400 hover:text-red-600 p-2" title="Delete">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;