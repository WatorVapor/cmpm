module;
#include <stdio.h>
#include <stdarg.h>
export module stdio;
export namespace std {
	namespace io {
		int printf(const char *format, ...) {
			va_list ap;
			va_start( ap, format );
			auto ret = ::printf(format, ap);
			va_end( ap );
			return ret;
		}
	}
}

