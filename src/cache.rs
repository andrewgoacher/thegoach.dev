use std::collections::HashMap;
use std::sync::{Arc, RwLock};

pub struct CacheMap<T>
{
    items: Arc<RwLock<HashMap<String, T>>>
}

pub struct Cache<T> {
    item: Arc<RwLock<Option<T>>>
}

impl<T> CacheMap<T> {
    pub fn new() -> Self {
        Self {
            items: Arc::new(RwLock::new(HashMap::default()))
        }
    }

    pub fn get_item(&self, key: &str) -> Option<T>
        where T: Clone
    {
        let reader = &self.items.read().unwrap();
        let option = reader.get(key);
        match option {
            None => None,
            Some(t) => Some(t.clone())
        }
    }

    pub fn set_item(&self, key: String, value: T) -> T
        where T: Clone
    {
        let mut writer = self.items.write().unwrap();

        writer.insert(key, value.clone());
        value
    }
}

impl <T> Default for CacheMap<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> Cache<T> {
    pub fn new() -> Self {
        Self {
            item: Arc::new(RwLock::new(None))
        }
    }

    pub fn get_cache(&self) -> Option<T>
        where T : Clone {
        let reader = self.item.read().unwrap();
        reader.clone()
    }

    pub fn set_cache(&self, t: T) 
        where T : Clone {
        let mut writer = self.item.write().unwrap();
        *writer = Some(t);
    }
}

impl <T> Default for Cache<T> {
    fn default() -> Self {
        Self::new()
    }
}