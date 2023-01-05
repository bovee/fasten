(function() {var implementors = {};
implementors["crossbeam"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam/mem/epoch/struct.Owned.html\" title=\"struct crossbeam::mem::epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam::mem::epoch::Owned"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam/mem/epoch/struct.Shared.html\" title=\"struct crossbeam::mem::epoch::Shared\">Shared</a>&lt;'a, T&gt;","synthetic":false,"types":["crossbeam::mem::epoch::Shared"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam/mem/struct.CachePadded.html\" title=\"struct crossbeam::mem::CachePadded\">CachePadded</a>&lt;T&gt;","synthetic":false,"types":["crossbeam::mem::cache_padded::CachePadded"]}];
implementors["futures"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures/future/struct.SharedItem.html\" title=\"struct futures::future::SharedItem\">SharedItem</a>&lt;T&gt;","synthetic":false,"types":["futures::future::shared::SharedItem"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures/future/struct.SharedError.html\" title=\"struct futures::future::SharedError\">SharedError</a>&lt;E&gt;","synthetic":false,"types":["futures::future::shared::SharedError"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures/sync/struct.BiLockGuard.html\" title=\"struct futures::sync::BiLockGuard\">BiLockGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["futures::sync::bilock::BiLockGuard"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures/sync/struct.BiLockAcquired.html\" title=\"struct futures::sync::BiLockAcquired\">BiLockAcquired</a>&lt;T&gt;","synthetic":false,"types":["futures::sync::bilock::BiLockAcquired"]}];
implementors["owning_ref"] = [{"text":"impl&lt;O, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningHandle.html\" title=\"struct owning_ref::OwningHandle\">OwningHandle</a>&lt;O, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"owning_ref/trait.StableAddress.html\" title=\"trait owning_ref::StableAddress\">StableAddress</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,&nbsp;</span>","synthetic":false,"types":["owning_ref::OwningHandle"]},{"text":"impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;","synthetic":false,"types":["owning_ref::OwningRef"]}];
implementors["parking_lot"] = [{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"parking_lot/struct.MutexGuard.html\" title=\"struct parking_lot::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["parking_lot::mutex::MutexGuard"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"parking_lot/struct.ReentrantMutexGuard.html\" title=\"struct parking_lot::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["parking_lot::remutex::ReentrantMutexGuard"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"parking_lot/struct.RwLockReadGuard.html\" title=\"struct parking_lot::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["parking_lot::rwlock::RwLockReadGuard"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"parking_lot/struct.RwLockWriteGuard.html\" title=\"struct parking_lot::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["parking_lot::rwlock::RwLockWriteGuard"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>","synthetic":false,"types":["regex_syntax::hir::literal::Literal"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()