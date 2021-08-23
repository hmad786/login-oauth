module.exports = {
  ensureAuth: (req: { isAuthenticated: () => any; }, res: { redirect: (arg0: string) => void; }, next: () => any)=>  {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureGuest: (req: { isAuthenticated: () => any; }, res: { redirect: (arg0: string) => void; }, next: () => any) => {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/log');
    }
  },
}
