type Breadcrumb = {
               label: string;
               href?: string;
};

type BreadcrumbsProps = {
               items: Breadcrumb[];
};

export const BreadcrumbsOutlined = ({ items }: BreadcrumbsProps) => {
               return (
                              <nav className="text-sm text-blue-700">
                                             <ol className="flex items-center space-x-2 bg-blue-50 border border-blue-200 p-3 rounded-lg">
                                                            {items.map((item, index) => (
                                                                           <li key={index} className="flex items-center">
                                                                                          {item.href ? (
                                                                                                         <a href={item.href} className="hover:underline font-medium">
                                                                                                                        {item.label}
                                                                                                         </a>
                                                                                          ) : (
                                                                                                         <span className="font-semibold">{item.label}</span>
                                                                                          )}
                                                                                          {index < items.length - 1 && (
                                                                                                         <span className="mx-2 text-blue-400">/</span>
                                                                                          )}
                                                                           </li>
                                                            ))}
                                             </ol>
                              </nav>
               );
};
