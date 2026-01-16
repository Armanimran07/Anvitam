import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project, BlogPost, Service, DigitalProduct, ContactMessage } from '../types';
import { supabase } from '../services/supabaseClient';

interface ContentContextType {
  projects: Project[];
  blogs: BlogPost[];
  services: Service[];
  digitalProducts: DigitalProduct[];
  messages: ContactMessage[];
  loading: boolean;
  addProject: (project: Project) => Promise<void>;
  addBlog: (blog: BlogPost) => Promise<void>;
  addService: (service: Service) => Promise<void>;
  addDigitalProduct: (product: DigitalProduct) => Promise<void>;
  addMessage: (message: ContactMessage) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  deleteDigitalProduct: (id: string) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  updateBlog: (id: string, blog: Partial<BlogPost>) => Promise<void>;
  updateService: (id: string, service: Partial<Service>) => Promise<void>;
  updateDigitalProduct: (id: string, product: Partial<DigitalProduct>) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [digitalProducts, setDigitalProducts] = useState<DigitalProduct[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Initial Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: pData } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (pData) setProjects(pData);

      const { data: bData } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (bData) setBlogs(bData);

      const { data: sData } = await supabase.from('services').select('*').order('created_at', { ascending: true });
      if (sData) setServices(sData);

      const { data: dData } = await supabase.from('digital_products').select('*').order('created_at', { ascending: false });
      if (dData) setDigitalProducts(dData);

      // Messages might fail if RLS prevents read (unauthenticated), which is fine for public view
      const { data: mData } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
      if (mData) setMessages(mData);

      setLoading(false);
    };

    fetchData();

    // Realtime Subscriptions
    const channels = [
      supabase.channel('public:projects').on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, (payload) => {
        if (payload.eventType === 'INSERT') setProjects(prev => [payload.new as Project, ...prev]);
        if (payload.eventType === 'DELETE') setProjects(prev => prev.filter(p => p.id !== payload.old.id));
        if (payload.eventType === 'UPDATE') setProjects(prev => prev.map(p => p.id === payload.new.id ? payload.new as Project : p));
      }).subscribe(),

      supabase.channel('public:blogs').on('postgres_changes', { event: '*', schema: 'public', table: 'blogs' }, (payload) => {
        if (payload.eventType === 'INSERT') setBlogs(prev => [payload.new as BlogPost, ...prev]);
        if (payload.eventType === 'DELETE') setBlogs(prev => prev.filter(p => p.id !== payload.old.id));
        if (payload.eventType === 'UPDATE') setBlogs(prev => prev.map(p => p.id === payload.new.id ? payload.new as BlogPost : p));
      }).subscribe(),

      supabase.channel('public:services').on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, (payload) => {
        if (payload.eventType === 'INSERT') setServices(prev => [...prev, payload.new as Service]);
        if (payload.eventType === 'DELETE') setServices(prev => prev.filter(p => p.id !== payload.old.id));
        if (payload.eventType === 'UPDATE') setServices(prev => prev.map(p => p.id === payload.new.id ? payload.new as Service : p));
      }).subscribe(),

      supabase.channel('public:products').on('postgres_changes', { event: '*', schema: 'public', table: 'digital_products' }, (payload) => {
        if (payload.eventType === 'INSERT') setDigitalProducts(prev => [payload.new as DigitalProduct, ...prev]);
        if (payload.eventType === 'DELETE') setDigitalProducts(prev => prev.filter(p => p.id !== payload.old.id));
        if (payload.eventType === 'UPDATE') setDigitalProducts(prev => prev.map(p => p.id === payload.new.id ? payload.new as DigitalProduct : p));
      }).subscribe(),

      supabase.channel('public:messages').on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload) => {
        if (payload.eventType === 'INSERT') setMessages(prev => [payload.new as ContactMessage, ...prev]);
        if (payload.eventType === 'DELETE') setMessages(prev => prev.filter(p => p.id !== payload.old.id));
      }).subscribe(),
    ];

    return () => {
      channels.forEach(channel => supabase.removeChannel(channel));
    };
  }, []);

  // CRUD Actions
  const addProject = async (project: Project) => {
    // Note: Supabase generates ID if we omit it, but we might be passing a temp one. 
    // Best practice: Omit ID and let Supabase return it, or use UUID if we generate it locally.
    const { id, ...data } = project;
    // Ensure we don't accidentally send undefined/null for optional jsonb fields if not set, or let them be null
    await supabase.from('projects').insert([data]);
  };

  const addBlog = async (blog: BlogPost) => {
    const { id, ...data } = blog;
    await supabase.from('blogs').insert([data]);
  };

  const addService = async (service: Service) => {
    const { id, ...data } = service;
    await supabase.from('services').insert([data]);
  };

  const addDigitalProduct = async (product: DigitalProduct) => {
    const { id, ...data } = product;
    await supabase.from('digital_products').insert([data]);
  };

  const addMessage = async (message: ContactMessage) => {
    const { id, ...data } = message;
    await supabase.from('messages').insert([data]);
  };

  const updateProject = async (id: string, project: Partial<Project>) => {
    await supabase.from('projects').update(project).match({ id });
  };

  const updateBlog = async (id: string, blog: Partial<BlogPost>) => {
    await supabase.from('blogs').update(blog).match({ id });
  };

  const updateService = async (id: string, service: Partial<Service>) => {
    await supabase.from('services').update(service).match({ id });
  };

  const updateDigitalProduct = async (id: string, product: Partial<DigitalProduct>) => {
    await supabase.from('digital_products').update(product).match({ id });
  };

  const deleteProject = async (id: string) => {
    await supabase.from('projects').delete().match({ id });
  }

  const deleteBlog = async (id: string) => {
    await supabase.from('blogs').delete().match({ id });
  }

  const deleteService = async (id: string) => {
    await supabase.from('services').delete().match({ id });
  }

  const deleteDigitalProduct = async (id: string) => {
    await supabase.from('digital_products').delete().match({ id });
  }

  const deleteMessage = async (id: string) => {
    await supabase.from('messages').delete().match({ id });
  };

  return (
    <ContentContext.Provider value={{
      projects, blogs, services, digitalProducts, messages, loading,
      addProject, addBlog, addService, addDigitalProduct, addMessage,
      updateProject, updateBlog, updateService, updateDigitalProduct,
      deleteProject, deleteBlog, deleteService, deleteDigitalProduct, deleteMessage
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};